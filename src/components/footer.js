import React from "react";

export default function Footer() {
    return (<footer class="footer position-absolute">
        <div class="row g-0 justify-content-between align-items-center h-100">
            <div class="col-12 col-sm-auto text-center">
                <p class="mb-0 mt-2 mt-sm-0 text-body">App Theme created by streetpro <span class="d-none d-sm-inline-block"></span>
                    <span class="d-none d-sm-inline-block mx-1">|</span>
                    <br class="d-sm-none" />2024 ©<a class="mx-1" href="https://streetpro.in">streetpro</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
                <p class="mb-0 text-body-tertiary text-opacity-85">v1.09.0</p>
            </div>
        </div>
    </footer>);
}