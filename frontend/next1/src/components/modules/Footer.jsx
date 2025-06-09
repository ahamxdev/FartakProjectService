import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
      return (
            <footer className='w-full bg-[#000] py-10 px-12'>
                  <div className="flex items-center lg:justify-between w-full">
                        <div className="relative lg:w-[120px] w-[70px] lg:h-[120px] h-[70px]">
                              <Image src={"/images/logo.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='footer-logo' />
                        </div>
                        <h4 className='md:text-2xl textlg font-bold text-[#FAB437]'>فرتاک پروژه</h4>
                        <div className="w-[78%] hidden lg:block bg-[#fff] h-[1px]"></div>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-6">
                        <div className="flex flex-col lg:w-[40%] w-full gap-3 mt-8">
                              <p className='md:text-2xl text-base text-white font-bold'>درباره فرتاک</p>
                              <p className='md:text-base text-xs text-white font-normal leading-7'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خل
                              </p>
                        </div>
                        <div className="lg:w-[60%] w-full grid md:grid-cols-3 grid-cols-2 gap-8">
                              <div className="flex flex-col gap-4 md:items-center">
                                    <p className='md:text-2xl text-lg font-bold text-white'>دسترسی سریع</p>
                                    <ul className="list-disc space-y-4 marker:text-white pr-5 md:pr-0">
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                    </ul>
                              </div>
                              <div className="flex flex-col gap-4 md:items-center">
                                    <p className='md:text-2xl text-lg font-bold text-white'>دسترسی سریع</p>
                                    <ul className="list-disc space-y-4 marker:text-white pr-5 md:pr-0">
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                          <li>
                                                <Link href={"/"} className='md:text-lg text-sm font-normal text-white'>صفحه اصلی</Link>
                                          </li>
                                    </ul>
                              </div>
                              <div className="flex flex-col gap-4">
                                    <p className='md:text-2xl text-lg font-bold text-right text-white mb-5'>دسترسی سریع</p>
                                    <div className="flex flex-col gap-8">
                                          <Link href={"/"} className='text-lg flex justify-between items-center font-normal text-white gap-5'>
                                                <span className='flex items-center gap-3 text-sm font-normal'>
                                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.38586 8.47407C7.03068 8.26096 6.56998 8.37614 6.35687 8.73132C6.14376 9.08651 6.25893 9.5472 6.61412 9.76031L10.0706 11.8342C11.2582 12.5468 12.7418 12.5468 13.9293 11.8342L17.3859 9.76031C17.741 9.5472 17.8562 9.08651 17.6431 8.73132C17.43 8.37614 16.9693 8.26096 16.6141 8.47407L13.1576 10.548C12.4451 10.9755 11.5549 10.9755 10.8424 10.548L7.38586 8.47407Z" fill="white" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2.86719C3.15279 2.86719 1.25 4.76998 1.25 7.11719V17.1172C1.25 19.4644 3.15279 21.3672 5.5 21.3672H18.5C20.8472 21.3672 22.75 19.4644 22.75 17.1172V7.11719C22.75 4.76998 20.8472 2.86719 18.5 2.86719H5.5ZM2.75 7.11719C2.75 5.5984 3.98122 4.36719 5.5 4.36719H18.5C20.0188 4.36719 21.25 5.5984 21.25 7.11719V17.1172C21.25 18.636 20.0188 19.8672 18.5 19.8672H5.5C3.98122 19.8672 2.75 18.636 2.75 17.1172V7.11719Z" fill="white" />
                                                      </svg>
                                                      ایمیل
                                                </span>
                                                <span className='text-sm font-normal'>admin@gmail.com</span>
                                          </Link>
                                          <Link href={"/"} className='flex justify-between items-center text-lg font-normal text-white gap-5'>
                                                <span className='flex items-center gap-3 text-sm font-normal'>
                                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.38586 8.47407C7.03068 8.26096 6.56998 8.37614 6.35687 8.73132C6.14376 9.08651 6.25893 9.5472 6.61412 9.76031L10.0706 11.8342C11.2582 12.5468 12.7418 12.5468 13.9293 11.8342L17.3859 9.76031C17.741 9.5472 17.8562 9.08651 17.6431 8.73132C17.43 8.37614 16.9693 8.26096 16.6141 8.47407L13.1576 10.548C12.4451 10.9755 11.5549 10.9755 10.8424 10.548L7.38586 8.47407Z" fill="white" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2.86719C3.15279 2.86719 1.25 4.76998 1.25 7.11719V17.1172C1.25 19.4644 3.15279 21.3672 5.5 21.3672H18.5C20.8472 21.3672 22.75 19.4644 22.75 17.1172V7.11719C22.75 4.76998 20.8472 2.86719 18.5 2.86719H5.5ZM2.75 7.11719C2.75 5.5984 3.98122 4.36719 5.5 4.36719H18.5C20.0188 4.36719 21.25 5.5984 21.25 7.11719V17.1172C21.25 18.636 20.0188 19.8672 18.5 19.8672H5.5C3.98122 19.8672 2.75 18.636 2.75 17.1172V7.11719Z" fill="white" />
                                                      </svg>
                                                      ایمیل
                                                </span>
                                                <span className='text-sm font-normal'>admin@gmail.com</span>
                                          </Link>
                                          <Link href={"/"} className='flex justify-between items-center text-lg font-normal text-white gap-5'>
                                                <span className='flex items-center gap-3 text-sm font-normal'>
                                                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.38586 8.47407C7.03068 8.26096 6.56998 8.37614 6.35687 8.73132C6.14376 9.08651 6.25893 9.5472 6.61412 9.76031L10.0706 11.8342C11.2582 12.5468 12.7418 12.5468 13.9293 11.8342L17.3859 9.76031C17.741 9.5472 17.8562 9.08651 17.6431 8.73132C17.43 8.37614 16.9693 8.26096 16.6141 8.47407L13.1576 10.548C12.4451 10.9755 11.5549 10.9755 10.8424 10.548L7.38586 8.47407Z" fill="white" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2.86719C3.15279 2.86719 1.25 4.76998 1.25 7.11719V17.1172C1.25 19.4644 3.15279 21.3672 5.5 21.3672H18.5C20.8472 21.3672 22.75 19.4644 22.75 17.1172V7.11719C22.75 4.76998 20.8472 2.86719 18.5 2.86719H5.5ZM2.75 7.11719C2.75 5.5984 3.98122 4.36719 5.5 4.36719H18.5C20.0188 4.36719 21.25 5.5984 21.25 7.11719V17.1172C21.25 18.636 20.0188 19.8672 18.5 19.8672H5.5C3.98122 19.8672 2.75 18.636 2.75 17.1172V7.11719Z" fill="white" />
                                                      </svg>
                                                      ایمیل
                                                </span>
                                                <span className='text-sm font-normal'>admin@gmail.com</span>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="flex justify-end md:mt-2.5 mt-4.5 gap-3">
                        <Link href={"/"} className='relative md:w-[67px] md:h-[86px] w-[50px] h-[50px]'>
                              <Image src={"/images/image 7.png"} alt='enamad' fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" />
                        </Link>
                        <Link href={"/"} className='relative md:w-[80px] md:h-[88px] w-[50px] h-[50px]'>
                              <Image src={"/images/image 6.png"} alt='enamad' fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" />
                        </Link>
                  </div>
            </footer>
      )
}

export default Footer