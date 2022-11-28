import React from 'react';
import ArticleItem from '../components/ArticleItem';
import ButtonCustom from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';

export default function SearchPage() {
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                <MainTitle isStyleSearch={true} title='4 Results found for "search query"' />
                <div className="tcl-row tcl-jc-center">
                    <div className="tcl-col-12 tcl-col-md-8">
                        <ArticleItem isStyleCard={true} isShowCategory={true} />
                    </div>
                </div>
                <div className="tcl-row tcl-jc-center">
                    <div className="tcl-col-12 tcl-col-md-8">
                        <ArticleItem isStyleCard={true} isShowCategory={true} />
                    </div>
                </div>
                <div className="tcl-row tcl-jc-center">
                    <div className="tcl-col-12 tcl-col-md-8">
                        <ArticleItem isStyleCard={true} isShowCategory={true} />
                    </div>
                </div>
                <div className="tcl-row tcl-jc-center">
                    <div className="tcl-col-12 tcl-col-md-8">
                        <ArticleItem isStyleCard={true} isShowCategory={true} />
                    </div>
                </div>
                <div className="tcl-row tcl-jc-center">
                    <div className="tcl-col-12 tcl-col-md-8">
                        <ArticleItem isStyleCard={true} isShowCategory={true} />
                    </div>
                </div>
                <div className="text-center">
                    <ButtonCustom buttonName={" Load More"} isLoadingButton={true} />
                </div>
            </div>
        </div>

    )
}
