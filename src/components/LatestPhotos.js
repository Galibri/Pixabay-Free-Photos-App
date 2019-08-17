import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class LatestPhotos extends Component {

    state = {
        photos: [],
        page: 1,
        per_page: 16,
        loading: true,
        totalPhotos: 0,
        totalPages: 0,
        searchKey: '',
        pageTitle: 'Popular Photos'
    }

    componentDidMount() {
        
        axios.get('https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&per_page=' + this.state.per_page + '&page=' + this.state.page)
            .then(res => {
                this.setState({
                    photos: res.data.hits,
                    loading: false,
                    page: this.state.page + 1,
                    totalPhotos: res.data.total,
                    totalPages: Math.ceil(res.data.total / this.state.per_page)
                })
            })
            .catch(err => console.log(err))
    }

    clickLoadMoreBtn = (e) => {
        this.setState({
            loading: true
        })

        const apiUrl = this.state.searchKey === '' ? 'https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&per_page=' + this.state.per_page + '&page=' + this.state.page : 'https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&per_page=' + this.state.per_page + '&page=' + this.state.page + '&q=' + this.state.searchKey

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    photos: res.data.hits,
                    loading: false,
                    page: this.state.page + 1
                })
            })
            .catch(err => console.log(err))
    }

    searchKeyUpdate = (e) => {
        this.setState({searchKey: e.target.value})
    }

    searchSubmit = (e) => {
        this.setState({
            page: 1, 
            pageTitle: 'Searched Items', 
            loading: true
        })

        const apiUrl = this.state.searchKey === '' ? 'https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&per_page=' + this.state.per_page + '&page=' + 1 : 'https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&per_page=' + this.state.per_page + '&page=' + 1 + '&q=' + this.state.searchKey

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    photos: res.data.hits,
                    loading: false,
                    page: this.state.page + 1,
                    totalPhotos: res.data.total,
                    totalPages: Math.ceil(res.data.total / this.state.per_page)
                })
            })
            .catch(err => console.log(err))
        
        e.preventDefault()
    }

    render() {
        return(
            <React.Fragment>
                <div className="row search-bar ">
                    <div className="col-lg-8 my-auto">
                        <h2 className="page-title">
                            {this.state.pageTitle}
                        </h2>
                        <p>
                            <span>Total found {this.state.totalPhotos}</span> | <span>Page {this.state.page -1} of {this.state.totalPages}</span>
                        </p>
                    </div>
                    <div className="col-lg-4 text-right  my-auto">
                        <form action="" onSubmit={this.searchSubmit}>
                            <input type="text" onChange={this.searchKeyUpdate} placeholder="Search Keyword..." />
                            <input type="submit" value="Search"/>
                        </form>
                    </div>
                </div>
                <div className="row">
                {
                    this.state.loading === false ? (
                        this.state.totalPhotos !== 0 ? (this.state.photos.map( photo => (
                            <div key={photo.id} className="col-lg-3">
                                <div className="single-photo-item">
                                    <Link to={'/photo?id=' + photo.id} className="d-block">
                                        <div className="image-wrapper">
                                            <img src={photo.previewURL} alt=""/>
                                        </div>
                                        <h5>{photo.user}</h5>
                                    </Link>
                                </div>
                            </div>
                        ))) : (
                            <div className="col-lg-12 text-center my-auto h-500">
                                <h2>No Photos Found</h2>
                                <i class="fa fa-meh-o fa-5x" aria-hidden="true"></i>
                            </div>
                        )
                    ) : (
                        <div className="col-lg-12 text-center my-auto h-500">
                            <h2>Please Wait...</h2>
                            <h3>Your request is being processed...</h3>
                            <i className="fa fa-spinner fa-pulse fa-5x"></i>
                        </div>
                    )
                }
                </div>
                {
                    this.state.totalPhotos === 0 ? '' : (
                        this.state.loading === true ? '' : (
                            this.state.page > this.state.totalPages ? '' : (
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-btn">
                                            <button className="btn btn-success" onClick={this.clickLoadMoreBtn}>
                                                Load Page {this.state.page}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    )
                }
            </React.Fragment>
        )
    }
}
export default LatestPhotos