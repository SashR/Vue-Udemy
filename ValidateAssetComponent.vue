<template>
    <div>
        <!--add asset modal-->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
        />
        <button
            type="button"
            class="btn cbpo-primary"
            data-toggle="modal"
            data-target="#validateAssetModal"
        >
            Validate Asset
        </button>
        <div
            class="modal fade"
            id="validateAssetModal"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-lg cbpo-secondary"
                style="max-width: fit-content;"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="validateBackdropLabel">
                            Validate Asset
                        </h5>
                        <button
                            type="button"
                            class="mod-close cbpo-primary"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="block justify-content-center  mt-4 p-3">
                            <form action="" class="row">
                                <div class="form-group col-4">
                                    <label for="ticket_no" class=""
                                        >Ticket No:</label
                                    >
                                    <input
                                        type="text"
                                        id="ticket_no"
                                        v-model="ticket_no"
                                        class="form-control form-control-sm "
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="status"
                                        v-model="status"
                                        class="custom-select"
                                    >
                                        <option value="">--Status--</option>
                                        <option value="storage"
                                            >In storage</option
                                        >
                                        <option value="deployed"
                                            >deployed</option
                                        >
                                        <option value="broken">broken</option>
                                        <option value="stolen">stolen</option>
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="financier"
                                        v-model="financier"
                                        class="custom-select"
                                    >
                                        <option value="">--Financier--</option>
                                        <option value="debtin">DebtIn</option>
                                        <option value="capabilitybpo"
                                            >CapabilityBPO</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="site"
                                        v-model="site"
                                        class="custom-select"
                                    >
                                        <option value="">--Site--</option>
                                        <option value="delta_towers"
                                            >Delta Towers</option
                                        >
                                        <option value="musgrave"
                                            >Musgrave</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="floor"
                                        v-model="floor"
                                        class="custom-select"
                                    >
                                        <option value="">--Floor--</option>
                                        <option value="2">2</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="room"
                                        v-model="room"
                                        class="custom-select"
                                    >
                                        <option value="">--Room--</option>
                                        <option value="mitchells_park"
                                            >Mitchells Park</option
                                        >
                                        <option value="moses_mabida"
                                            >Moses Mabhiba</option
                                        >
                                        <option value="mitchells_park"
                                            >Mitchells Park</option
                                        >
                                        <option value="promenade"
                                            >Promenade</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-3">
                                    <label for="bay">Bay:</label>
                                    <input
                                        type="text"
                                        id="bay"
                                        v-model="bay"
                                        class="form-control form-control-sm "
                                    />
                                </div>
                                <div class="form-group col-3">
                                    <label for="workstation"
                                        >Workstation:</label
                                    >
                                    <input
                                        type="number"
                                        id="workstation"
                                        v-model="workstation"
                                        class="form-control form-control-sm "
                                    />
                                </div>
                                <div class="form-group col-3">
                                    <label for="employee">Allocated to:</label>
                                    <input
                                        type="number"
                                        id="employee"
                                        v-model="employee"
                                        class="form-control form-control-sm "
                                    />
                                </div>
                                <div class="form-group col-6">
                                    <label for="date_allocated"
                                        >Date Allocated:</label
                                    >
                                    <input
                                        type="date"
                                        id="date_allocated"
                                        class="form-control form-control-sm datepicker"
                                    />
                                </div>
                                <div class="col-12"></div>
                                <div class="form-group">
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="errors"
                                    >
                                        {{ errors }}
                                    </div>
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="ticket_no_error"
                                    >
                                        {{ ticket_no_error }}
                                    </div>
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="bay_error"
                                    >
                                        {{ bay_error }}
                                    </div>
                                    <div
                                        class="alert alert-success col-12"
                                        v-if="success"
                                    >
                                        {{ success }}
                                    </div>
                                </div>

                                <div class="row justify-content-end col-12">
                                    <button
                                        type="button"
                                        class="btn cbpo-primary"
                                        v-on:click="submitAdd()"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.block {
    width: 50vw;
    border: 1px solid whitesmoke;
    border-radius: 15px;
}

select {
    width: 80%;
}

.mod-close {
    border: 1px solid#071028;
    border-radius: 50%;
}

.cbpo-primary {
    background-color: #071028 !important;
    color: whitesmoke !important;
}

.cbpo-secondary {
    color: #071028;
    background-color: whitesmoke;
}
</style>
<script>
export default {
    data() {
        return {
            ticket_no: "",
            status: "",
            financier: "",
            site: "",
            floor: "",
            room: "",
            bay: "",
            workstation: "",
            employee: "",
            errors: "",
            success: "",
            ticket_no_error: "",
            bay_error: ""
        };
    },
    methods: {
        submitAdd() {
            this.errors = "";
            this.ticket_no_error = "";
            this.bay_error = "";
            this.validate();
        },
        validate: function(asset_id) {
            this.validateAsset();
            this.validateTicketNo();
            this.validateBay();
        },
        validateAsset: function() {
            console.log("");
            let checkTicket =
                !this.ticket_no &&
                (this.workstation ||
                    this.bay ||
                    this.room ||
                    this.floor ||
                    this.site);
            let checkEmployee =
                !this.employee &&
                this.type == "laptop" && this.status == "deployed";
            if (checkTicket || checkEmployee) {
                // this.errors = "The following fields need to be filled: ";
                this.errors += checkEmployee
                    ? "An Employee name is needed for deploying a laptop, "
                    : "";
                this.errors += checkTicket
                    ? "A new Ticket number is required,"
                    : "";
            }
            // Check and compare previous values to determine if movement occured. If it did, then ticket no is required
            // Need dummy or actual data to create function
        },
        validateTicketNo() {
            let regex = /^[1-9][0-9]{0,4}$/;
            if (this.ticket_no) {
                this.ticket_no_error = regex.test(this.ticket_no)
                    ? ""
                    : "Ticket Number must be a number";
            }
        },
        validateBay() {
            let regex = /^[A-Z]{1}$/;
            if (this.bay) {
                this.bay_error = regex.test(this.bay)
                    ? ""
                    : "The Bay should a single alphabet";
            }
        }
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
