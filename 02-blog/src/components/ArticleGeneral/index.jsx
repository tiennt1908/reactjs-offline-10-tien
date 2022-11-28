import React from 'react';
import ArticleItem from '../ArticleItem';
import ButtonCustom from '../shared/Button';
import MainTitle from "../shared/MainTitle";

export default function ArticleGeneral() {
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                <MainTitle title="News List" isShowButtonCustom={true} buttonName="View More" goto="/" />
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                    <div className="tcl-col-12 tcl-col-md-6">
                        <ArticleItem isStyleCard={true} />
                    </div>
                </div>
                <div className="text-center">
                    <ButtonCustom isLoadingButton={true} buttonName=" Load more"></ButtonCustom>
                </div>
            </div>
        </div>
    )
}
