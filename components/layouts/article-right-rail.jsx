import React from "react";


const ArticleRightRail = ({children}) => {
    return (
        <div className="row">
            <header className="col-fixed-on-small">
                {children[0]}
            </header>
            <section className="col-12">
                <div className="row">
                    <article className="cil-xs-12 col-md-8">
                        {children[1]}
                    </article>
                    <aside className="col-xs-12 col-md-4">
                        {children[2]}
                    </aside>
                </div>
            </section>
            <footer className="col-12">
                {children[3]}
                <p style={{textAlign:'center'}}>Copyright &copy; {new Date(Date.now()).getFullYear().toString()}</p>
            </footer>
        </div>
    )

}

ArticleRightRail.sections = ['header', 'main', 'sidebar', 'footer'];

export default ArticleRightRail;