import React, { Component } from 'react'
import axios from 'axios'

class Photo extends Component {
    state = {
        photo: '',
        loading: true,
    }

    componentDidMount() {

        let param = window.location.search.substring(1)
        let photo_id = param.split('=')[1]

        axios.get('https://pixabay.com/api/?key=3447824-37fdc89336262fba700af0e47&id=' + photo_id)
            .then(res => {
                this.setState({
                    photo: res.data.hits[0],
                    loading: false
                })
            })
            .catch(err => console.log(err))
    }

    fileDownloadPrompt = ( e ) => {

        e.preventDefault()
        var loadableFile = e.target.getAttribute('file')
        // let fileNameArray = loadableFile.split('/')
        // let fileName = fileNameArray[fileNameArray.length - 1]
        setTimeout(() => {
            const response = {
              file: loadableFile,
            };
            // server sent the url to the file!
            // now, let's download:
            window.open(response.file);
            // you could also do:
            // window.location.href = response.file;
          }, 100);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <img src={this.state.photo.largeImageURL} alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i> <span>{this.state.photo.likes}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-eye" aria-hidden="true"></i> <span>{this.state.photo.views}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-tags" aria-hidden="true"></i> <span>{this.state.photo.tags}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-download" aria-hidden="true"></i> <span>{this.state.photo.downloads}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-user" aria-hidden="true"></i> <span>{this.state.photo.user}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <i className="fa fa-heart" aria-hidden="true"></i> <span>{this.state.photo.favorites}</span>
                            </div>
                        </div>
                        <div className="downlaod-item">
                            <div className="item-row">
                                <button className="btn btn-info" file={this.state.photo.largeImageURL}  onClick={this.fileDownloadPrompt}>Download <i className="fa fa-download"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Photo