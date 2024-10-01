'use client';

import { poppins } from '@/app/fonts/fonts';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // Import ag-Grid React component
import 'ag-grid-community/styles/ag-grid.css'; // Import the necessary CSS for ag-grid
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme CSS for ag-grid

import SearchCompanies from './SearchCompanies';
import Spinner from '@/app/ui/utility/spinner';
import { CompanyMetaData, CompaniesResponse } from '@/app/models/companies';
import { CallNotesListDataModel, CallNotesListResponse } from '@/app/models/callnotes';

export default function CallNotesDashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState<CompanyMetaData[]>([]);
    const [callNotesList, setCallNotesList] = useState<CallNotesListDataModel[]>([]);
    const [isSearchCompanyPopPresent, setIsSearchCompanyPopPresent] = useState(false);

    useEffect(() => {
        async function fetchCompanies() {
            const response = await fetch('/api/company/get', {
                method: "GET",
                headers: {
                    authorization: `Token ${localStorage.getItem('authToken')}`,
                },
            });

            const companiesR: CompaniesResponse = await response.json() as CompaniesResponse;
            setCompanies(companiesR.response.results);
            fetchCallNotes();
        }

        async function fetchCallNotes() {
            const response = await fetch('/api/callnotes/get', {
                method: "GET",
                headers: {
                    authorization: `Token ${localStorage.getItem('authToken')}`,
                },
            });

            const callNotesListR: CallNotesListResponse = await response.json() as CallNotesListResponse;
            setCallNotesList(callNotesListR.data);
            setLoading(false);
        }

        fetchCompanies();
    }, []);

    const searchCompanyForAddNotes = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSearchCompanyPopPresent(true);
    };

    const clickOnAddNotes = async (company: CompanyMetaData) => {
        var url = `/dashboard/callnotes/addcallnote?name=${company.name}&id=${company.id}`;
        router.push(url, { scroll: false });
    };

    const clickOnViewNotes = async (notesListItem: CallNotesListDataModel) => {
        var url = `/dashboard/callnotes/addcallnote?name=${notesListItem.company_details.company_name}&id=${notesListItem.company_details.id}&noteId=${notesListItem.id}`;
        router.push(url, { scroll: false });
    };

    const columnDefs = [
        { headerName: "Company Name", valueGetter: (params:any) => params.data.company_details.company_name,filter: true , flex:2},
        { headerName: "Recorded by", valueGetter: (params:any) => params.data.user.name,flex:1 },
        { headerName: "Last Meeting", valueGetter: () => 'No Meeting Scheduled' },
        { headerName: "Status", valueGetter: () => 'New Lead',filter: true },
        { headerName: "Scheduled Meeting", valueGetter: () => 'No Meeting Scheduled' }
    ];
    

    if (loading) {
        return <Spinner loading={loading} />;
    }

    return (
        <div className="flex-col justify-center items-center">
            <div className="flex items-center justify-start h-[100px] pl-6  mb-[100px]">
                <div className={`${poppins.className} antialiased text-black text-3xl font-medium`}>Call Notes</div>
                <button
                    className={`${poppins.className} antialiased w-[150px] h-12 rounded-[25px] font-medium text-white bg-bgColor2 hover:bg-bgColor1 right-4 items-center absolute`}
                    onClick={searchCompanyForAddNotes}
                >
                    + Add Notes
                </button>
            </div>

            <div className="container mx-auto pl-28 pr-28 pt-4">
            <div className={`${poppins.className} antialiased ag-theme-alpine`} style={{ width: '100%' }}>
                <AgGridReact
                    rowData={callNotesList}
                    columnDefs={columnDefs}
                    domLayout='autoHeight' // Adjust grid height based on content
                    onRowClicked={(row) => row?.data && clickOnViewNotes(row.data)}
                     
                />
            </div>
        </div>

            <SearchCompanies
                isOpen={isSearchCompanyPopPresent}
                onClose={() => setIsSearchCompanyPopPresent(false)}
                items={companies}
                onSelect={(company) => clickOnAddNotes(company)}
            />
        </div>
    );
}
