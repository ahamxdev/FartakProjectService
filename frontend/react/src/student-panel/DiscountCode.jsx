import React, { useState } from "react";
<<<<<<< HEAD
=======
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Link } from "react-router-dom";
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0

function DiscountCode() {
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
  const discountCards = [
    {
      title: "کد تخفیف برای درس مهندسی نرم افزار استاد امیرحسین باذیار",
      duration: "7 روز",
      tag: "# دانشگاه",
      code: "A44SD8YY",
      discount: "80%",
    },
    {
      title: "کد تخفیف برای درس پایگاه داده استاد محمدی",
      duration: "3 روز",
      tag: "# دانشجویی",
      code: "DB2023",
      discount: "50%",
    },
    {
      title: "کد تخفیف برای درس هوش مصنوعی",
      duration: "5 روز",
      tag: "# ویژه",
      code: "AI50OFF",
      discount: "60%",
    },
  ];

  return (
    <main className="p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full flex flex-wrap gap-3">
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
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-3">
          {discountCards.map((card, index) => (
            <div className="w-full md:w-1/2 lg:w-1/2 px-3 mt-3" key={index}>
              <div
                className="flex rounded overflow-hidden h-full"
                style={{
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <div
                  className="flex items-center justify-center px-3 bg-gray-50 border border-dashed border-[#999999] border-l-0"
                  style={{
                    minWidth: "100px",
                  }}
                >
                  <span className="font-black text-3xl leading-none text-gray-800">
                    {card.discount}
                  </span>
                </div>
                <div className="relative p-3 flex-grow flex flex-col border border-dashed border-[#999999]">
                  <span className="p-4 -top-4 -right-[17px] border border-dashed bg-white border-[#999999] rounded-full absolute"></span>
                  <span className="p-4 -bottom-4 -right-[17px] border border-dashed bg-white border-[#999999] rounded-full absolute"></span>
                  <h5 className="mb-2 text-lg">{card.title}</h5>
                  <div className="flex items-center mb-2">
                    <span className="text-white bg-green-500 rounded-full px-2 py-1 text-xs leading-tight">
                      مهلت استفاده : {card.duration}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="no-underline inline-block my-3 text-xs"
                  >
                    <span className="bg-yellow-400 rounded-full px-2 py-1 text-gray-800">
                      {card.tag}
                    </span>
                  </a>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-gray-500 text-sm">کد تخفیف:</span>
                    <button
                      type="button"
                      className="border bg-[#C6303E] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2"
                      onClick={() => {
                        navigator.clipboard.writeText(card.code);
                        alert("کد تخفیف کپی شد!");
                      }}
                    >
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      <span className="text-xs font-light">کپی کردن</span>{" "}
>>>>>>> origin/alimash
                      {card.code}
                      <i className="far fa-copy"></i>
                    </button>
=======
                      <span
                        style={{
                          fontWeight: "900",
                          fontSize: "32px",
                          lineHeight: "1",
                          color: "#222",
                        }}
                      >
                        {card.discount}
                      </span>
                    </div>
                    <div
                      className="p-3 flex-grow-1 d-flex flex-column"
                      style={{ borderRight: "1px dashed #ccc" }}
                    >
                      <h5 className="mb-2">{card.title}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <small
                          className="text-white bg-success rounded-pill p-2"
                          style={{ fontSize: "11px", lineHeight: "1.2" }}
                        >
                          مهلت استفاده : {card.duration}
                        </small>
                      </div>
                      <Link
                        to={"/"}
                        className="text-decoration-none d-inline-block my-3"
                        style={{ fontSize: "12px" }}
                      >
                        <span
                          className="bg-warning rounded rounded-pill px-2 py-1"
                          style={{ color: "#222" }}
                        >
                          {card.tag}
                        </span>
                      </Link>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="text-muted small">کد تخفیف:</span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm px-3 d-flex align-items-center gap-2"
                          style={{ fontSize: "13px", fontWeight: "bold" }}
                          onClick={() => {
                            navigator.clipboard.writeText(card.code);
                            alert("کد تخفیف کپی شد!");
                          }}
                        >
                          {card.code}
                          <i className="far fa-copy"></i>
                        </button>
                      </div>
                    </div>
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DiscountCode;
