import React from "react";
import "../styles/home.css";
import { Link } from 'react-router-dom';



const DashboardLayout = () => {
  return (
    <>
 
<div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",position:"relative",}}>
   <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",position:"absolute",}}>
<div style={{marginRight:"-60rem"}}>
    <div className="dashbord-admin-profile">
    <img src="../img/img-person.jpg" alt="img" />
    <div>
    <h5>شهلا ایمانی</h5>
    <p>ادمین سطح 2</p>
    </div>
    </div>

<div class="accordion d-flex flex-column justify-content-center  admin-dashbord-Acordin" id="accordionExample">
  
  <div class="accordion-item">

    <h2 class="accordion-header" id="headingOne">
      <button  class="accordion-button btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><img  src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem", marginLeft:"0.4rem",fontWeight:"700"}}> مدیر گروه ها</p></button>
    </h2>
    <div class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample" id="collapseOne">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> پنل کارفرما</p></button>
    </h2>
    <div class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" id="collapseTwo">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> پنل فریلنسر </p></button>
    </h2>
    
    <div class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample" id="collapseEight">
    
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" style={{backgroundColor:"black",color:"white",borderRadius:"8px"}} to={"#"}>  لیست و افزودن فریلنسر </Link></div>

    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>  لیست وضعیت پروژه </Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> فایل تسک های پروژه ها</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> درخواست های تسک پروژه</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>چت با فریلنسرها </Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> تایید فرایند مالی تسک ها</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> پروژه های انجام شده</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> تایید اطلاعات فریلنسر</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>  هزینه ها</Link></div>


    </div>
  </div>


  


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> پنل اساتید </p></button>
    </h2>
    
    <div class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" id="collapseThree">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" style={{backgroundColor:"black",color:"white",borderRadius:"8px"}} to={"#"}>   نمایش اساتید و سطح بندی</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> تایید رزومه استاد</Link></div>

    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>تایید اطلاعات شخصی</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> مدیریت راهنماهای عملکردی</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> آموزش های ضبط شده</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>کلاس های خصوصی آنلاین</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> کلاس های ضبط شده</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> کلاس های خصوصی حضوری</Link></div>

    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> تدریس </p></button>
    </h2>
    <div class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample" id="collapseFive">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSex">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSex" aria-expanded="false" aria-controls="collapseSex"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> دوره ها  </p></button>
    </h2>
    <div class="accordion-collapse collapse" aria-labelledby="headingSex" data-bs-parent="#accordionExample" id="collapseSex">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    </div>
  </div>




  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"><img className="" src="../img/calling.svg" alt="icon-dash" /> <p  style={{fontSize:"14px",textAlign:"right",marginTop:"0.7rem",width:"100px",fontWeight:"700" }}> پروژه ها </p></button>
    </h2>
    <div class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample" id="collapseSeven">
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>محصولات ما</Link></div>
    </div>
  </div>
</div>
</div>
   </div>
  
         <div className="dashbord-admin-left-body">
          <div  style={{marginRight:"55rem",marginTop:"1rem"}}>
          <button  className="button-showPerson"  type="button" >
          <p >تعداد نمایش 10فرد</p>
         <i class="bi bi-arrow-down"></i>
          </button>
          </div>
         {/* table */}

         
<div dir="rtl" class="table-responsive" style={{overflowY:"hidden"}}>
  <table class="table">
    <thead>
      <tr>
        <th>کد استاد  
        <i class="bi bi-arrow-down"></i>
        </th>
        <th>نام استاد
        <i class="bi bi-arrow-down"></i>    
        </th>
      
        <th>جنسیت 
        <i class="bi bi-arrow-down"></i>
        </th>
        

        <th>استان محل سکونت
        <i class="bi bi-arrow-down"></i>

        </th>

        <th>لول استاد
        <i class="bi bi-arrow-down"></i>

        </th>

        <th>رتبه استاد
        {/* <i class="bi bi-arrow-down"></i> */}

        </th>

        <th>حذف استاد
        {/* <i class="bi bi-arrow-down"></i> */}

        </th>



      </tr>
    </thead>
    <tbody >
      <tr >
        <th  scope="row">45B0</th>
        <td >امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>قزوین</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B1</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B2</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B3</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B4</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B5</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B6</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B7</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>Support</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr>
        <th scope="row">45B8</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
      <tr class="">
        <th scope="row">45B9</th>
        <td>امیرحسین رحمانی</td>
        <td>مرد</td>
        <td>تاکستان</td>
        <td>5 ستاره</td>
        <td class="btn btn-success mt-2">افزایش رتبه</td>
        <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
        <td>حذف استاد</td>

      </tr>
    </tbody>
  </table>



<nav style={{marginRight:"12rem",marginTop:"3rem"}} aria-label="Page navigation example">
  <ul class="pagination gap-3">
    <li class="page-item ">
      <Link to="#" class="page-link">صفحه قبلی</Link>
    </li>
    <li class="page-item d-sm-none">
      <span class="page-link page-link-static">2 / 5</span>
    </li>
    <li class="page-item d-none d-sm-block">
      <Link to="#" class="page-link">1</Link>
    </li>
    <li class="page-item  d-none d-sm-block" aria-current="page">
      <span class="page-link">
        2
        <span class="visually-hidden">(current)</span>
      </span>
    </li>
    <li class="page-item d-none d-sm-block">
      <Link to="#" class="page-link">3</Link>
    </li>
    <li class="page-item d-none d-sm-block">
      <Link to="#" class="page-link">4</Link>
    </li>
    <li class="page-item d-none d-sm-block">
      <Link to="#" class="page-link">5</Link>
    </li>
    <li class="page-item">
      <Link to="#" class="page-link">صفحه بعدی</Link>
    </li>
  </ul>
</nav>
</div>
         </div>
         



         </div>

  
    </>
  );
};

  
export default DashboardLayout;