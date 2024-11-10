import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">訂餐系統</h1>
            <p className="col-md-8 fs-4">
              本系統使用 React.js 作為前端框架，Node.js、MongoDB
              作為後端服務器。
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              開始訂餐
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>創建新訂單</h2>
              <p>
                可以自行發起訂單，其他人可以加入您的訂單。您可以在訂單中添加食物，設定價格。
              </p>
              <button className="btn btn-outline-light" type="button">
                登錄會員來創建訂單
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>加入訂單</h2>
              <p>可以查看其他人發起的訂單，並加入訂單</p>
              <button className="btn btn-outline-secondary" type="button">
                看看今日訂單
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2024 Allen Wang
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
