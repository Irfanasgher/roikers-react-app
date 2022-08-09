import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import ArticleHeading from "../../../components/pages/blog/article-heading/ArticleHeading";
import Article from "../../../components/pages/blog/article/Article";
import RelatedArticles from "../../../components/pages/blog/related-articles/RelatedArticles";
import Footer from "../../../components/common/footer/Footer";
import LatestPost from "../../../components/pages/blog/latest-post/LatestPost";
class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true} />
                <Header text='Blog Roikers' changeImage2={true} changePosition={true}/>
                <div className='container mt-5 text-left'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <ArticleHeading />
                            <Article />
                            <RelatedArticles />
                        </div>
                        <div className='col-md-4'>
                            <LatestPost />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;
