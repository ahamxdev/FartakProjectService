"use client"
import React, { useState } from "react";

const Pagination = ({ totalPages = 5 }) => {
      const [currentPage, setCurrentPage] = useState(1);

      const handlePrev = () => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
      };

      const handleNext = () => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      };

      return (
            <div className="flex items-center gap-8 justify-center py-4">
                  <button
                        onClick={handlePrev}
                        className="border rounded-md p-2 disabled:opacity-50 cursor-pointer"
                        disabled={currentPage === 1}
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                  </button>
                  <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                              <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i + 1
                                          ? "w-5 bg-blue-600"
                                          : "bg-blue-300"
                                          }`}
                              />
                        ))}
                  </div>
                  <button
                        onClick={handleNext}
                        className="border rounded-md p-2 disabled:opacity-50 cursor-pointer"
                        disabled={currentPage === totalPages}
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                  </button>
            </div>
      );
};

export default Pagination;
