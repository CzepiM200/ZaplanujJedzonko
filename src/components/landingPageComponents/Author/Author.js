import React from "react";
import "./_author.scss";
import author from '../../../assets/images/Author/author.jpeg';

const Author = () => {
    return (
        <section className="author container">
            <img className = "author__img" src= {author} alt="zdjęcie klienta"/>
                <article className="author__text">
                    <h3 className="author__header">
                        {" Lorem ipsum dolor sit amet"}
                    </h3>
                    <p className="author__item">
                        {" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."}
                    </p>
                </article>
        </section>

    );
};

export default Author;