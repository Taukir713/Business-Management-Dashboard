export default function reportForm(reportTypes=[], reportMonthAndDate, selectedReportType="") {
    return `
        <form id="reportForm" class="form-card mb-3"> 
        <div class="row">  
            <div class="col-lg-6 mb-4"> 
                <label class="form-label fw-semibold" for="reportMonthAndYear">
                    Select Month & Year
                </label>

               <div class="input-group">
                    <input 
                        type="month" 
                        class="form-control" 
                        id="reportMonthAndYear"  
                        value="${reportMonthAndDate}" 
                    >

                    <div class="input-group-text mt-1">
                        <input 
                            class="form-check-input mt-0 me-2" 
                            type="checkbox" 
                            id="useCurrentMonthAndYear"
                        >
                        <label 
                            class="form-label mb-0" 
                            for="useCurrentMonthAndYear"
                        >
                            Use Current Month & Year
                        </label>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4"> 
                <label class="form-label fw-semibold" for="reportType">
                    Report Type
                </label>

                <select class="form-select" id="reportType" > 
                    <option   value="" selected disabled >
                        Select Report Type
                    </option>  
                    ${reportTypes.map((reportType) => `
                         <option   value="${reportType}" ${reportType === selectedReportType ? "selected" : ""}    > 
                            ${reportType }
                        </option>
                    `)}
                </select> 
            </div> 
        </div> 

        <button class="btn btn-outline-primary"> 
            Generate Report
        </button> 

        ${selectedReportType ? 
            `<button class="btn btn-outline-warning" type="button" id="clearButton"> 
                Clear
            </button>`
            : "" }
    </form> 
    `
}