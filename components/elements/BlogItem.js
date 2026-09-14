import Link from 'next/link'

export default function BlogItem({ col, item, blogStyle }) {
    return (
        <>
            <div className={col}>
                <div className={`blog-item ${blogStyle ? blogStyle : ""}`}>
                    <div className="blog-thumb">
                        <Link href={`/blog/${item.id}`}><img src={`/assets/img/blog/${item.img}`} alt="" /></Link>
                    </div>
                    <div className="blog-content">
                        <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                        <div className="blog-meta">
                            <ul className="list-wrap">
                                <li>{item.date}</li>
                                <li><Link href="blog">Nicole Willis</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
