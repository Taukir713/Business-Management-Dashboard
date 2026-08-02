export default function loginForm() {
    return `<form id="loginForm"> 
        <div class="mb-4"> 
            <small class="form-label">
                Click any demo account to auto-fill login credentials.
            </small>

            <div> 
                <button class="btn btn-outline-primary demoAccountBtn" data-account="admin"  type="button"> 
                    Admin
                </button> 

                <button class="btn btn-outline-primary demoAccountBtn" data-account="manager"  type="button"> 
                    Manager
                </button> 

                <button class="btn btn-outline-primary demoAccountBtn" data-account="viewer"  type="button"> 
                    Viewer
                </button> 
            </div>
        </div>

        <div class="mb-4"> 
            <label class="form-label" for="username">
                Username
            </label>

            <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter Username"
                value=""
            > 
        </div>

        <div class="mb-4"> 
            <label class="form-label" for="password">
                Password
            </label>

            <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter Password"
                value=""
            > 
        </div>  
        <button class="btn btn-outline-primary w-100"> 
            Login 
        </button> 
    </form>`
}
 
 