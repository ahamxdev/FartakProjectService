import React, { useState } from "react";
<<<<<<< HEAD
=======
// import { Link } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0

const Dashboard = () => {
  const [activeLabel, setActiveLabel] = useState(null);
  const labels = [
    { id: 1, name: "ابتدایی", color: "#007BFF", borderColor: "#007BFF" },
    {
      id: 2,
      name: "دوره اول متوسطه",
      color: "#007BFF",
      borderColor: "#007BFF",
    },
    {
      id: 3,
      name: "دوره دوم متوسطه",
      color: "#007BFF",
      borderColor: "#007BFF",
    },
    { id: 4, name: "کنکور", color: "#DC3545", borderColor: "#DC3545" },
    { id: 5, name: "دانشگاه", color: "#e0ba32", borderColor: "#e0ba32" },
    { id: 6, name: "کسب و کار", color: "#29AC95", borderColor: "#29AC95" },
  ];

  return (
    <main className="overflow-y-auto">
      <div className="container mx-auto py-3 px-4 w-full">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-3">
            {labels.map((label) => (
              <div
                key={label.id}
                className={`p-3 rounded-2xl text-center cursor-pointer w-44`}
                style={{
                  backgroundColor:
                    activeLabel === label.id ? label.color : "white",
                  border:
                    activeLabel === label.id
                      ? `3px solid ${label.borderColor}`
                      : `1px solid ${label.borderColor}`,
                  color: activeLabel === label.id ? "white" : label.color,
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                }}
                onClick={() => setActiveLabel(label.id)}
              >
                {label.name}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full">
                <div className="bg-white p-2 shadow rounded-xl overflow-hidden h-full flex flex-col">
                  <img
                    src="/img/Rectangle 2715.png"
                    className="w-full rounded-lg object-cover"
                    alt="دوره UML"
                    style={{ height: "200px" }}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src="/img/Instructor.png"
                          alt="استاد"
                          className="rounded-full"
                          width="32"
                          height="32"
                        />
                        <span className="font-bold text-sm">امیرحسین نیاور</span>
                      </div>
                      <span className="bg-yellow-400 text-dark px-3 py-1 rounded-full text-xs">
                        دانشگاه
                      </span>
                    </div>
                    <p className="font-bold text-sm mb-4">
                      دوره طراحی UML برای درس مهندسی نرم افزار...
                    </p>
                    <div className="mt-auto">
                      <small className="text-gray-500">۲۰٪</small>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-black h-1.5 rounded-full"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <button className="bg-black text-white text-sm py-1 px-3 rounded mt-2 w-1/2 text-left">
                        مطالعه دوره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;