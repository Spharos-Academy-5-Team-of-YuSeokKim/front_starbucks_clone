import React from "react";
import Image from "next/image";

function ServiceList() {
  return (
    <div className="min-h-dvh bg-gray-200">
      <h2 className="p-5 text-lg font-bold">서비스</h2>
      <ul className="space-y-4 px-3">
        {" "}
        <li className="flex items-center justify-between">
          {" "}
          <div className="flex items-center space-x-2">
            {" "}
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=16408&format=png&color=000000"
              alt="주문내역"
            />
            <span>주문내역</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=15895&format=png&color=000000"
              alt="선물함"
            />
            <span>선물함</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=24472&format=png&color=000000"
              alt="쿠폰"
            />
            <span>쿠폰</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=14598&format=png&color=000000"
              alt="배송지"
            />
            <span>배송지 관리</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=16008&format=png&color=000000"
              alt="알림"
            />
            <span>입고 알림내역</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="mt-4 font-bold">약관 및 정책</li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=X91T6MIy7d9E&format=png&color=000000"
              alt="이용동의"
            />
            <span>배송지 정보 수집 및 이용 동의</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
      </ul>
    </div>
  );
}

export default ServiceList;
