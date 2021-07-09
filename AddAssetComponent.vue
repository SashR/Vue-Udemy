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
            data-target="#addAssetModal"
        >
            Add Asset
        </button>
        <div
            class="modal fade"
            id="addAssetModal"
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
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Add Asset
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
                                    <label for="asset_id" class="">
                                        Asset Tag/ID:
                                    </label>
                                    <input
                                        type="text"
                                        id="asset_id"
                                        class="form-control form-control-sm"
                                        v-model="asset_id"
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <label for="serial_no" class=""
                                        >Serial No:</label
                                    >
                                    <input
                                        type="text"
                                        id="serial_no"
                                        v-model="serial_no"
                                        class="form-control form-control-sm "
                                    />
                                </div>
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
                                <div class="form-group col-12">
                                    <label for="description" class=""
                                        >Description:</label
                                    >
                                    <textarea
                                        type="text"
                                        id="description"
                                        v-model="description"
                                        class="form-control form-control-sm "
                                    >
                                    </textarea>
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
                                        name="type"
                                        id="type"
                                        v-model="type"
                                        class="custom-select"
                                    >
                                        <option value="">--Type--</option>
                                        <option value="laptop">Laptop</option>
                                        <option value="desktop">Desktop</option>
                                        <option value="monitor">Monitor</option>
                                        <option value="peripheral"
                                            >Peripheral</option
                                        >
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
                                    <label for="employee">Assigned to:</label>
                                    <input
                                        type="text"
                                        id="employee"
                                        v-model="employee"
                                        class="form-control form-control-sm "
                                    />
                                </div>

                                <div class="form-group col-6">
                                    <label for="supplier_price"
                                        >Supplier Price:</label
                                    >
                                    <input
                                        type="number"
                                        id="supplier_price"
                                        v-model="supplier_price"
                                        class="form-control form-control-sm"
                                    />
                                </div>
                                <div class="form-group col-6">
                                    <label for="date_received"
                                        >Date Received:</label
                                    >
                                    <input
                                        type="date"
                                        id="date_received"
                                        class="form-control form-control-sm"
                                        required
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
                                        v-if="asset_id_error"
                                    >
                                        {{ asset_id_error }}
                                    </div>
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="serial_no_error"
                                    >
                                        {{ serial_no_error }}
                                    </div>
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="ticket_no_error"
                                    >
                                        {{ ticket_no_error }}
                                    </div>
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="description_error"
                                    >
                                        {{ description_error }}
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
            asset_id: "",
            serial_no: "",
            ticket_no: "",
            description: "",
            status: "",
            type: "",
            financier: "",
            site: "",
            floor: "",
            room: "",
            bay: "",
            workstation: "",
            employee: "",
            supplier_price: "",
            errors: "",
            success: "",
            asset_id_error: "",
            serial_no_error: "",
            ticket_no_error: "",
            description_error: "",
            bay_error: ""
        };
    },
    methods: {
        submitAdd() {
            this.errors = "";
            this.asset_id_error = "";
            this.serial_no_error = "";
            this.ticket_no_error = "";
            this.description_error = "";
            this.bay_error = "";
            this.validate();
        },
        validate: function(asset_id) {
            this.validateAsset();
            this.validateAssetID();
            this.validateSerialNo();
            this.validateTicketNo();
            this.validateDescription();
            this.validateBay();
        },
        validateAsset: function() {
            let checkReqFieldsEmpty =
                this.asset_id &&
                this.serial_no &&
                this.ticket_no &&
                this.description &&
                this.status &&
                this.type &&
                this.site &&
                this.floor;
            if (!checkReqFieldsEmpty) {
                let regex = /french keyboard|headset/i;
                let importantPeripheral = regex.test(this.description);
                this.errors += "Please fill in the following fields ... ";
                this.errors +=
                    this.asset_id ||
                    (this.type == "peripheral" && !importantPeripheral)
                        ? ""
                        : " Asset ID,";
                this.errors +=
                    this.serial_no ||
                    (this.type == "peripheral" && !importantPeripheral)
                        ? ""
                        : " Serial number,";
                this.errors += this.ticket_no ? "" : " Ticket number,";
                this.errors += this.description ? "" : " Description,";
                this.errors += this.status ? "" : " Status,";
                this.errors += this.type ? "" : " Type,";
                this.errors += this.site ? "" : " Site,";
                this.errors += this.floor ? "" : " Floor,";
                this.errors += this.room || this.floor != 24 ? "" : " Room,";
                this.errors +=
                    !this.employee &&
                    this.type == "laptop" && this.status == "deployed"
                        ? " Employee"
                        : "";
            }
        },
        validateAssetID() {
            let regex1 = /^CAP_BPO[0-9]{6}$/;
            let regex2 = /^ODEK_[0-9]{5}$/;
            if (this.asset_id) {
                if (
                    !(regex1.test(this.asset_id) || regex2.test(this.asset_id))
                ) {
                    this.asset_id_error =
                        "Asset ID not valid pattern : CAP_BPO###### or ODEK_#####";
                }
            }
        },
        validateSerialNo() {
            let regex = /^\w{7,25}$/;
            if (this.serial_no) {
                this.serial_no_error = regex.test(this.serial_no)
                    ? ""
                    : "Serial number must only contain alphanumerics, and be between 7 and 25 chars";
            }
        },
        validateTicketNo() {
            let regex = /^[1-9][0-9]{0,4}$/;
            if (this.ticket_no) {
                this.ticket_no_error = regex.test(this.ticket_no)
                    ? ""
                    : "Ticket Number must be a number";
            }
        },
        validateDescription() {
            let regex = /^[A-Za-z0-9 ]{6,100}$/;
            if (this.description) {
                this.description_error = regex.test(this.description)
                    ? ""
                    : "Descriptions should be only alphanumerics and between 10 and 100 characters";
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
