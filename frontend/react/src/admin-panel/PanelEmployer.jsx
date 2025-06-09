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
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}>تایید پروژه های جدید </Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> تسک بندی پروژه های جدید</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> ثبت اطلاعیه جدید به کارفرما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> چت با کارفرما</Link></div>
    <div class="accordion-body">  <Link class="text-decoration-none professor-font" to={"#"}> هزینه ها؟؟</Link></div>
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
    <div class="accordion-body">  <Link class="text-decoration-none professor-font"  to={"#"}>   نمایش اساتید و سطح بندی</Link></div>
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
  




<div className="dashbord-admin-left-container-newProject">
<div className="dasbord-admin-left-paragraph-employe">
<p>سفارش شماره 194</p>
<p>دسته بندی : توسعه نرم افزار و آی تی</p>
<p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
<p>توضیحات : ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه</p>
<p>هزینه : از 500,000 تا 1,000,000 تومان</p>
<p>زمان : 55 روز</p>
<p>الویت : تحویل سریع</p>
<p>فوریت : متمایز</p>
<p>هزینه : 250,000 تومان پرداخت شده</p>
<p>شماره تماس های کارفرما :09126663547</p>
<div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
  <button className="dashbord-admin-left-btn1">تایید سفارش </button>
  <button className="dashbord-admin-left-btn2">عدم تایید سفارش - ارسال پیام</button>
</div>
</div>
<div className="dasbord-admin-left-paragraph">
<p>سفارش شماره 194</p>
<p>دسته بندی : توسعه نرم افزار و آی تی</p>
<p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
<p>توضیحات : ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه</p>
<p>هزینه : از 500,000 تا 1,000,000 تومان</p>
<p>زمان : 55 روز</p>
<p>الویت : تحویل سریع</p>
<p>فوریت : متمایز</p>
<p>هزینه : 250,000 تومان پرداخت شده</p>
<p>شماره تماس های کارفرما :09126663547</p>
<div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
  <button className="dashbord-admin-left-btn1">تایید سفارش </button>
  <button className="dashbord-admin-left-btn2">عدم تایید سفارش - ارسال پیام</button>
</div>
</div><div className="dasbord-admin-left-paragraph-left">
<p>سفارش شماره 194</p>
<p>دسته بندی : توسعه نرم افزار و آی تی</p>
<p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
<p>توضیحات :ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکن ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه</p>
<p>هزینه : از 500,000 تا 1,000,000 تومان</p>
<p>زمان : 55 روز</p>
<p>الویت : تحویل سریع</p>
<p>فوریت : متمایز</p>
<p>هزینه : 250,000 تومان پرداخت شده</p>
<p>شماره تماس های کارفرما :09126663547</p>

<div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
  <button className="dashbord-admin-left-btn1">تایید سفارش </button>
  <button className="dashbord-admin-left-btn2">عدم تایید سفارش - ارسال پیام</button>
</div>
</div>
       



         </div>

        </div>
    </>
  );
};

  
export default DashboardLayout;