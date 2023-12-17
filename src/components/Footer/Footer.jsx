import React from "react";
import { dataIntro, dataCommunity, dataHost, dataSupport } from "./dataFields";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
      <div className="container mx-auto flex flex-wrap justify-between max-w-screen-xl">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Giới thiệu</h3>
          <ul className="list-none">
            {dataIntro.map((item, index) => {
              return (
                <li className="mb-2" key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.data}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Cộng đồng</h3>
          <ul className="list-none">
            {dataCommunity.map((item, index) => {
              return (
                <li className="mb-2" key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.data}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Đón tiếp khách</h3>
          <ul className="list-none">
            {dataHost.map((item, index) => {
              return (
                <li className="mb-2" key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.data}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
          <ul className="list-none">
            {dataSupport.map((item, index) => {
              return (
                <li className="mb-2" key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.data}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex mx-auto justify-between items-center max-w-screen-xl mt-8 border-t border-gray-700 pt-8">
        <div className="flex text-sm">
          <p>&copy; 2023 Airbnb, Inc. All rights reserved. </p>
          <p className="hover:underline cursor-pointer"> ∙ Quyền riêng tư</p>
          <p className="hover:underline cursor-pointer"> ∙ Điều khoản</p>
          <p className="hover:underline cursor-pointer"> ∙ Sơ đồ trang web</p>
        </div>
        <div className="flex text-sm">
          <p className="hover:underline cursor-pointer">Tiếng việt(VN) </p>
          <p className="hover:underline cursor-pointer xl:pl-2">USD</p>
        </div>
      </div>
    </footer>
  );
}
