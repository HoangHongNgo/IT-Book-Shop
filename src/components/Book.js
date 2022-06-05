import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Logo from "./Logo";

const INF_API = "https://api.itbook.store/1.0/books/"
const SEARCH_API = "https://api.itbook.store/1.0/search/";

const Book = () => {
    const [book, setBook] = useState({});
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [buyCount, setBuyCount] = useState(0);
    const [buyBook, setBuyBook] = useState([]);

    const params = useParams();
    const isbn13 = params.isbn13;
    console.log(isbn13);

    useEffect(() => {
        fetch(INF_API + isbn13)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBook(data);
            });
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            console.log(SEARCH_API + searchTerm);
            fetch(SEARCH_API + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setBooks(data.books);
                    console.log(data);
                });
            setSearchTerm("")
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }


    return (
        <div className="container">
            <Logo />
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">FOHOSO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav />
                        {/* <div className="btn-group me-3">
                            <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16" >
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                </svg>
                                Giỏ hàng {buyCount}
                            </button>
                            <ul className="dropdown-menu">
                                {buyBook.map((book) =>
                                    <li className="container">
                                        <a className="dropdown-item row" href="#">
                                            <img src={book.image} className="col-sm-4" alt="..." />
                                            <h6 className="col-sm-8">{book.title}</h6>
                                            <h7>{book.price}</h7>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleOnChange} />
                        </form> */}
                    </div>
                </div>
            </nav >
            <div className="row m-5">
                <div className="col"><img src={book.image} class="img-thumbnail" alt="..."></img></div>
                <div className="col">
                    <h3>{book.title}</h3>
                    <h5>{book.subtitle}</h5>
                    <p><strong>Tác giả : </strong>{book.authors}</p>
                    <p><strong>Mô tả : </strong>{book.desc}</p>
                    <p><strong>Nhà xuất bản : </strong>{book.publisher}</p>
                    <p><strong>Số trang : </strong>{book.pages}</p>
                    <p><strong>Năm : </strong>{book.year}</p>
                    <p><strong>Đánh giá : </strong>{book.rating}/5</p>
                    <p><strong>Giá : </strong>{book.price}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Book