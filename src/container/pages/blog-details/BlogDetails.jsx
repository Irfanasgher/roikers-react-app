import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import ArticleHeading from "../../../components/pages/blog-details/article-heading/ArticleHeading";
import Article from "../../../components/pages/blog-details/article/Article";
import RelatedArticles from "../../../components/pages/blog-details/related-articles/RelatedArticles";
import Footer from "../../../components/common/footer/Footer";
class BlogDetails extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true} />
                <div className='container mt-5 text-left'>
                    <ArticleHeading />
                    <Article />
                    <RelatedArticles />

                </div>
                <Footer />
            </div>
        );
    }
}

export default BlogDetails;
