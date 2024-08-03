
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../__store/store";
import { setView } from "../__store/viewSlice";


const TopBar = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state: RootState) => state.view.currentView);

  const handleViewChange = (newView: 'project' | 'feature' | 'user') => {
    dispatch(setView(newView));
  };

  return (
    <div className="bg-black text-white flex justify-end items-center p-4 border-b border-white">


      {currentView == null &&
        <button className='"bg-black text-white border border-white py-2 px-4 ml-2 transition duration-300 hover:bg-gray-800 hover:text-gray-400 active:bg-gray-600 active:text-gray-500 active:border-gray-700"'>
            Upload Project
        </button>
      }
      { currentView != null &&
      <>
      <button className="bg-black text-white border border-white py-2 px-4 ml-2 transition duration-300 hover:bg-gray-800 hover:text-gray-400 active:bg-gray-600 active:text-gray-500 active:border-gray-700"
      onClick={()=> handleViewChange('project')}>
        Project
      </button>
      <button className="bg-black text-white border border-white py-2 px-4 ml-2 transition duration-300 hover:bg-gray-800 hover:text-gray-400 active:bg-gray-600 active:text-gray-500 active:border-gray-700"
      onClick={()=> handleViewChange('feature')}>
        Feature
      </button>
      <button className="bg-black text-white border border-white py-2 px-4 ml-2 transition duration-300 hover:bg-gray-800 hover:text-gray-400 active:bg-gray-600 active:text-gray-500 active:border-gray-700"
      onClick={()=> handleViewChange('user')}>
        User
      </button>
      </>
      } 
    </div>
  );
};

export default TopBar;
