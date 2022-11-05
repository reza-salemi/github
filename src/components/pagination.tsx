interface PaginationProps {
  page: number;
  setPage: (page:any) => void;
}

const Pagination = ({page, setPage}: PaginationProps) => {

  const handlePrevious = () => {
    setPage((prev:any) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setPage((prev:any) =>  prev + 1);
  };

  return (
    <div className="flex w-fit bg-base-100 rounded-lg font-[Poppins]">
      <button disabled={page === 1} onClick={handlePrevious} className="h-12 border-2 border-r-0 dark:border-gray-800 border-indigo-600
               px-4 rounded-l-lg">
        &laquo;
      </button>
      <button onClick={handleNext} className="h-12 border-2 border-indigo-600
               dark:border-gray-800 px-4 rounded-r-lg">
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;