import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';

export default class AddUserScreen extends Component {
    onSubmit = (event) =>{
        event.preventDefault();
        const password = document.getElementById("inputPassword").value;
        const retypepassword = document.getElementById("retypePassword").value
        if (password === retypepassword) {
            axios.post(config.rootPath + "/api/users/adduser", {
                fullname: document.getElementById("inputFullname").value,
                email: document.getElementById("inputEmail").value,
                username: document.getElementById("inputUsername").value,
                password: document.getElementById("inputPassword").value
            }).then(res =>{
                alert(res.data.message);
                window.location.href = "/personal"
            }).catch(err =>{
                console.log(err)
            })
        } else {
            alert("Mật khẩu của bạn không khớp nhau!")
        }
        
    }
    render() {
        return (
            <div>
            <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal" data-target="#addUserModal">Tạo tài khoản</button>

            <div className="modal fade" id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="addUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addUserModalLabel text-left">Tạo tài khoản</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit = {this.onSubmit} className="form" >
                            <div className="form-group">
                                <label htmlFor="inputFullname" className="col-form-label">Họ và Tên</label>
                                <input type="text" className="form-control" id="inputFullname" placeholder="Nguyễn Văn A" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="col-form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="email@gmail.com" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputUsername" className="col-form-label">Tài khoản</label>
                                <input type="text" className="form-control" id="inputUsername" placeholder="username" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword" className="col-form-label">Mật khẩu</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="password" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="retypePassword" className="col-form-label">Nhập lại mật khẩu</label>
                                <input type="password" className="form-control" id="retypePassword" placeholder="password" required=""/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
