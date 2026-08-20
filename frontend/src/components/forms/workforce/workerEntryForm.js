export default function workerEntryForm(  workers = [],entry = null ,date = "" ) {
    return ` 
    <form id="workerEntryForm" class="form-card"> 
        <div class="row"> 
            <div class="col-lg-6 mb-4"> 
                <label class="form-label fw-semibold">
                    Select Worker
                </label> 
                <select class="form-select" id="workerId"> 
                    <option value="" selected disabled>
                        Select Worker
                    </option>

                    ${workers.map(worker => ` 
                        <option 
                            value="${worker._id}"
                            ${entry?.workerId._id === worker._id ? "selected" : ""}
                        >
                            ${worker.name}
                        </option> 
                    `).join("")} 
                </select> 
            </div>

            <div class="col-lg-6 mb-4"> 
                <label class="form-label fw-semibold">
                    Worked Hours
                </label>

                <input
                    type="number"
                    step="0.5"
                    class="form-control"
                    id="workedHours"
                    placeholder="Enter Hours"
                    value="${entry?.workedHours || ""}"
                > 
            </div> 

            <div class="col-lg-6 mb-4"> 
                <label class="form-label fw-semibold" for="workerDate">
                   Select Date
                </label>
                
                <div class="input-group">
                    <input
                        type="date"
                        class="form-control"
                        id="workerDate" 
                        value="${date || ""}"
                    > 

                    <div class="input-group-text mt-1">
                            <input 
                                class="form-check-input mt-0 me-2" 
                                type="checkbox" 
                                id="useTodaysDate"
                            >
                            <label 
                                class="form-label mb-0" 
                                for="useTodaysDate"
                            >
                                Use Today's Date
                            </label>
                    </div>
                </div>
            </div>  
            
        </div>

        <button class="btn btn-outline-primary"> 
            ${entry ? "Update Entry" : "Save Entry"} 
        </button> 
    </form> 
    `;
}