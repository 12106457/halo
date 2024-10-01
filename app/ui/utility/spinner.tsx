// const Spinner = () => {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16"></div>
//       </div>
//     );
//   };
  
// export default Spinner;
  

interface SpinnerProps {
    loading: boolean; // Explicitly type `isOpen` as boolean  
}

import ClipLoader from 'react-spinners/ClipLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import GridLoader from 'react-spinners/GridLoader';


const Spinner:React.FC<SpinnerProps> = ({ loading })  => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GridLoader color="#386077" loading={loading} size={10} />
    </div>
  );
};

export default Spinner;
