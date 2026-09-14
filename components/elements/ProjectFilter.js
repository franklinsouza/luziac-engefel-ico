import ProjectItem from "@/components/elements/ProjectItem"
import Pagination from "@/components/filter/Pagination"
import { useEffect, useState } from "react"
import projectData from "../../util/project.json"
export default function ProjectFilter({ col }) {

    const [filter, setFilter] = useState({ status: '', type: '', location: '' })

    // Filter the users by status, type, and location
    const filteredUsers = projectData.filter(user => {
        return (
            user.status.toLowerCase().includes(filter.status.toLowerCase()) &&
            user.type.toLowerCase().includes(filter.type.toLowerCase()) &&
            user.location.toLowerCase().includes(filter.location.toLowerCase())
        )
    })

    // Get a list of unique values for status, type, and location
    const uniqueStatus = [...new Set(projectData.map(user => user.status))]
    const uniqueTypes = [...new Set(projectData.map(user => user.type))]
    const uniqueLocation = [...new Set(projectData.map(user => user.location))]


    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = 4,
        showPagination = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(filteredUsers.length / limit))
    // console.log(pagination)

    useEffect(() => {
        cratePagination()
    }, [limit, pages, filteredUsers.length])

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(filteredUsers.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(filteredUsers.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit

    const getPaginatedProducts = filteredUsers.slice(startIndex, endIndex)


    let start = Math.floor((currentPage - 1) / showPagination) * showPagination
    let end = start + showPagination
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }

    return (
        <>

            <section className="inner-project-area section-pb-140">
                <div className="container">
                    <div className="project-top-meta mb-50">
                        <form action="#">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="form-grp">
                                        <input type="text" placeholder="Search by project name or location..." />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-grp select">
                                                <select className="form-select" value={filter.status} onChange={e => setFilter({ ...filter, status: e.target.value })}>
                                                    <option value="">All</option>
                                                    {uniqueStatus.map(status => (
                                                        <option key={status} value={status}>
                                                            {status}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-grp select">
                                                <select className="form-select" value={filter.type} onChange={e => setFilter({ ...filter, type: e.target.value })}>
                                                    <option value="">All</option>
                                                    {uniqueTypes.map(type => (
                                                        <option key={type} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-grp select">
                                                <select className="form-select" value={filter.location} onChange={e => setFilter({ ...filter, location: e.target.value })}>
                                                    <option value="">All</option>
                                                    {uniqueLocation.map(location => (
                                                        <option key={location} value={location}>
                                                            {location}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {getPaginatedProducts.length === 0 && (
                        <h3>No Products Found </h3>
                    )}


                    <div className="project-item-wrap">
                        <div className="row">
                            {getPaginatedProducts.map((item, i) => (
                                <ProjectItem item={item} col={col} key={i} />
                            ))}
                        </div>
                    </div>
                    <Pagination
                        getPaginationGroup={
                            getPaginationGroup
                        }
                        currentPage={currentPage}
                        pages={pages}
                        next={next}
                        prev={prev}
                        handleActive={handleActive}
                    />

                    {getPaginationGroup.length <= 0 ? null : (
                        <p>
                            show {currentPage} of {pages}
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}