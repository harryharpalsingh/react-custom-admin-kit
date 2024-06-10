import React from "react";
import '../styles/theme.min.css';
import userImage from '../assets/images/SeñorHarpal.jpg'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
                <div class="collapse navbar-collapse justify-content-between">
                    <div class="navbar-logo">
                        <button class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
                            <span class="navbar-toggle-icon">
                                <span class="toggle-line"></span>
                            </span>
                        </button>
                        <a class="navbar-brand me-1 me-sm-3" href="../../index.html">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                    <p class="logo-text ms-2 d-none d-sm-block">Stocks API</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="search-box navbar-top-search-box d-none d-lg-block">
                        <ul class="navbar-nav navbar-nav-icons flex-row">
                            {/*Notifications starts*/}
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" style={{ minWidth: "2.25rem" }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
                                    <span class="d-block" style={{ height: '20px', width: '20px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell" >
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg>
                                    </span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                                    <div class="card position-relative border-0">
                                        <div class="card-header p-2">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="text-body-emphasis mb-0">Notifications</h5><button class="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                            </div>
                                        </div>

                                        <div class="card-body p-0">
                                            <div class="scrollbar-overlay" style={{ height: '27rem' }} data-simplebar="init">
                                                <div class="simplebar-wrapper" style={{ margin: '0px' }}>
                                                    <div class="simplebar-height-auto-observer-wrapper">
                                                        <div class="simplebar-height-auto-observer"></div>
                                                    </div>
                                                    <div class="simplebar-mask">
                                                        <div class="simplebar-offset" style={{ right: '0px', bottom: '0px;' }}>
                                                            <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}>
                                                                <div class="simplebar-content" style={{ padding: '0px' }}>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3">
                                                                                    <img class="rounded-circle" src="../../assets/img/team/40x40/30.webp" alt="" />
                                                                                </div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                                                        <span class="me-1 fs-10">💬</span>Mentioned you in a comment.
                                                                                        <span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span>
                                                                                    </p>
                                                                                    <p class="text-body-secondary fs-9 mb-0">
                                                                                        <svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                                            <path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                                                                                        </svg>
                                                                                        <span class="fw-bold">10:41 AM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" />
                                                                                <svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                                                    <path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                                                                                </svg>
                                                                                <div class="dropdown-menu py-2">
                                                                                    <a class="dropdown-item" href="#!">Mark as unread</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3">
                                                                                    <div class="avatar-name rounded-circle"><span>J</span></div>
                                                                                </div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Jane Foster</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                                                        <span class="me-1 fs-10">📅</span>
                                                                                        Created an event.
                                                                                        <span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m
                                                                                        </span>
                                                                                    </p>
                                                                                    <p class="text-body-secondary fs-9 mb-0"><svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                                                                        <span class="fw-bold">10:20 AM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" />
                                                                                <svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>
                                                                                <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3">
                                                                                    <img class="rounded-circle avatar-placeholder" src="../../assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class="me-1 fs-10">👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                                                    <p class="text-body-secondary fs-9 mb-0"><svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg><span class="fw-bold">9:30 AM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" />
                                                                                <svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                                                    <path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>
                                                                                <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="../../assets/img/team/40x40/57.webp" alt="" /></div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class="me-1 fs-10">💬</span>Mentioned you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                                    <p class="text-body-secondary fs-9 mb-0"><svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                                                                        <span class="fw-bold">9:11 AM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" /><svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>
                                                                                <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="../../assets/img/team/40x40/59.webp" alt="" /></div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Herman Carter</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class="me-1 fs-10">👤</span>Tagged you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                                    <p class="text-body-secondary fs-9 mb-0"><svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                                                                        <span class="fw-bold">10:58 PM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" /><svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>
                                                                                <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                                                        <div class="d-flex align-items-center justify-content-between position-relative">
                                                                            <div class="d-flex">
                                                                                <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="../../assets/img/team/40x40/58.webp" alt="" /></div>
                                                                                <div class="flex-1 me-sm-3">
                                                                                    <h4 class="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                                                    <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class="me-1 fs-10">👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                                    <p class="text-body-secondary fs-9 mb-0"><svg class="svg-inline--fa fa-clock me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                                                                        <span class="fw-bold">10:18 AM </span>August 7,2021</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="dropdown notification-dropdown">
                                                                                <button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent" />
                                                                                <svg class="svg-inline--fa fa-ellipsis fs-10 text-body" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg>
                                                                                <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div></div></div></div><div class="simplebar-placeholder" style={{ width: '0px', height: '0px' }}>
                                                    </div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                                                    <div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
                                                </div>
                                                <div class="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                                                    <div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer p-0 border-top border-translucent border-0">
                                            <div class="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                                                <a class="fw-bolder" href="../../pages/notifications.html">Notification history</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/*User profile starts*/}
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" style={{ minWidth: "2.25rem" }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
                                    <span class="d-block" style={{ height: '20px', width: '20px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user text-body fs-5">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser" data-bs-popper="static">
                                    <div class="card position-relative border-0">
                                       
                                        <div class="card-body p-0">
                                            <div class="text-center pt-4 pb-3">
                                                <div class="avatar avatar-xl ">
                                                    <img class="rounded-circle " src={userImage} alt="" />
                                                </div>
                                                <h6 class="mt-2 text-body-emphasis">Mr. Nice Guy</h6>
                                            </div>
                                        </div>

                                        <div class="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                            <ul class="nav d-flex flex-column mb-2 pb-1">
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user me-2 text-body">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle></svg>
                                                        <span>Profile</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart me-2 text-body">
                                                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                                        </svg>
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock me-2 text-body"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                        Posts &amp; Activity
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings me-2 text-body"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                        Settings &amp; Privacy
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle me-2 text-body"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                        Help Center
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-3" href="#!">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 text-body"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                        Language
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="card-footer p-0 border-top border-translucent">
                                            <ul class="nav d-flex flex-column my-3">
                                                <li class="nav-item"><a class="nav-link px-3" href="#!">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus me-2 text-body">
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="8.5" cy="7" r="4"></circle>
                                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                                    </svg>Add another account
                                                </a>
                                                </li>
                                            </ul>
                                            <hr />
                                            <div class="px-3">
                                                <a class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out me-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                    Sign out
                                                </a>
                                            </div>
                                            <div class="my-2 text-center fw-bold fs-10 text-body-quaternary">
                                                <a class="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a class="text-body-quaternary mx-1" href="#!">Terms</a>•<a class="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>);
}