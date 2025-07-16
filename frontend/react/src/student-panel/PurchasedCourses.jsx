import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

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
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <div style={{ width: "250px" }}>
          <Sidebar />
        </div>

        <main className="flex-grow-1" style={{ overflowY: "auto" }}>
          <div className="container-fluid py-3" style={{ maxWidth: "100%" }}>
            <div className="row">
              <div className="col-12 d-flex gap-3 flex-wrap">
                {labels.map((label) => (
                  <div
                    key={label.id}
                    className={`p-3 rounded-5 cursor-pointer text-center`}
                    style={{
                      width: "180px",
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
            </div>

            <div className="row g-4 mt-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="col-md-4">
                  <div className="card p-2 shadow rounded-4 overflow-hidden h-100">
                    <img
                      src="/img/Rectangle 2715.png"
                      className="card-img-top rounded-3"
                      alt="دوره UML"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="/img/Instructor.png"
                            alt="استاد"
                            className="rounded-circle"
                            width="32"
                            height="32"
                          />
                          <span className="fw-bold small">امیرحسین نیاور</span>
                        </div>
                        <span className="badge bg-warning text-dark px-3 py-1">
                          دانشگاه
                        </span>
                      </div>
                      <p className="card-text fw-bold small">
                        دوره طراحی UML برای درس مهندسی نرم افزار...
                      </p>
                      <div className="mt-auto">
                        <small className="text-muted">۲۰٪</small>
                        <div
                          className="progress mt-2"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <button className="btn btn-dark btn-sm mt-2 w-50 align-self-start">
                          مطالعه دوره
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
