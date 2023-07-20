import React from 'react';

interface IMainArticle {
  children: React.ReactNode;
}

const MainArticle = ({ children }: IMainArticle) => {
  return <div className="text-justify mt-4">{children}</div>;
};

export default MainArticle;
