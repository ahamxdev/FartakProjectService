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
  
         <div className="dashbord-admin-left-body-status">
          <div  style={{marginRight:"55rem",marginTop:"-2rem"}}>
          <button  className="button-showPerson"  type="button" >
          <p >تعداد نمایش 10فرد</p>
         <i class="bi bi-arrow-down"></i>
          </button>
          </div>
         {/* table */}

         
<div dir="rtl" class="table-responsive" style={{overflowY:"hidden"}}>
  <table class="table">
    <thead >
      <tr  >
        <th style={{backgroundColor:" #001f3f",color:"white",borderRadius:"0 10px 10px 0"}}> نام پروژه   
        <i class="bi bi-arrow-down"></i>
        </th>
        <th style={{backgroundColor:" #001f3f",color:"white"}}> وضعیت پروژه
        <i class="bi bi-arrow-down"></i>    
        </th >
      
        <th style={{backgroundColor:" #001f3f",color:"white"}}>درصد پیشرفت 
        <i class="bi bi-arrow-down"></i>
        </th >
        

        <th  style={{backgroundColor:" #001f3f",color:"white"}}>  نوع پروژه
        <i class="bi bi-arrow-down"></i>

        </th>

        <th style={{backgroundColor:" #001f3f",color:"white"}}> نوع پرداخت
        <i class="bi bi-arrow-down"></i>

        </th>

        <th style={{backgroundColor:" #001f3f",color:"white"}}> حذف پروژه
        {/* <i class="bi bi-arrow-down"></i> */}

        </th>

        <th style={{backgroundColor:" #001f3f",color:"white",borderRadius:"10px 0 0 10px"}}> اطلاعات تسک ها
        {/* <i class="bi bi-arrow-down"></i> */}

        </th>



      </tr>
    </thead>
    <tbody >

     
      <tr>
        <th scope="row">سایت عرفانی</th>
        <td> در حال انجلام</td>
        <td>23 درصد</td>
        <td>طراحی وب سایت</td>
        <td>5 ستاره</td>
        <td> نوع دوم 25%</td>
        <td > حذف پروژه</td>
        

      </tr>
      <tr >
        <th style={{color:"red"}}  scope="row">سایت امین سایت</th>
        <td style={{color:"red"}}> کنسل شده</td>
        <td style={{color:"red"}}>45 درصد</td>
        <td style={{color:"red"}}>طراحی موبایل</td>
        <td style={{color:"red"}}>نوع اول 100% </td>
        <td style={{color:"red"}} > کنسل شده</td>
        <td style={{color:"red"}} > اطلاعات بیشتر</td>
      

      </tr>
      <tr>
        <th scope="row">سایت نمادین های ایرانی</th>
        <td> کنسل شده</td>
        <td>2 درصد</td>
        <td>طراحی cms</td>
        <td>نوع دوم 25% </td>
        <td class=" mt-2"> حذف پروژه</td>
        <td class=" me-2 mt-2">اطلاعات بیشتر </td>
    

      </tr>
      <tr class="">
        <th scope="row">سایت خاک هرمز حمایت</th>
        <td> غیرفعال شده</td>
        <td>90 درصد</td>
        <td>طراحی اپلیکیشن</td>
        <td>نوع اول 100% </td>
        <td class=" mt-2"> حذف پروژه </td>
        <td class=" me-2 mt-2"> اطلاعات بیشتر</td>
        

      </tr>
    </tbody>
  </table>

  <div dir="rtl" class="table-responsive" style={{overflowY:"hidden"}}>
  <table class="table" style={{width:"750px",marginRight:"4.5rem"}}>
    <thead >
      <tr  >
        <th style={{backgroundColor:" #001f3f",color:"white",borderRadius:"0 10px 10px 0"}}> نام تسک   
        <i class="bi bi-arrow-down"></i>
        </th>
        <th style={{backgroundColor:" #001f3f",color:"white"}}>  فریلنسر
        <i class="bi bi-arrow-down"></i>    
        </th >
      
        <th style={{backgroundColor:" #001f3f",color:"white"}}>وضعیت  
        <i class="bi bi-arrow-down"></i>
        </th >
        

        <th  style={{backgroundColor:" #001f3f",color:"white"}}>   درصد پیشرفت
        <i class="bi bi-arrow-down"></i>

        </th>

        <th style={{backgroundColor:" #001f3f",color:"white"}}> فایل 
        <i class="bi bi-arrow-down"></i>

        </th>

        <th style={{backgroundColor:" #001f3f",color:"white",borderRadius:"10px 0 0 10px"}}> نمایش فایل 
        {/* <i class="bi bi-arrow-down"></i> */}

        </th>

       
      </tr>
    </thead>
    <tbody >

     
      <tr>
        <th scope="row"> صحبت با کارفرما</th>
        <td> ایمان محمدی  </td>
        <td>تکمیل شده </td>
        <td> 100 درصد </td>
        <td> ارسال شده</td>
        <td>نمایش فایل</td>
       
        

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

  </div>
    </>
  );
};

  
export default DashboardLayout;