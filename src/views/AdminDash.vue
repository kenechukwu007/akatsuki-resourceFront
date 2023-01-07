<template>
    <div class="dashboard">
        <router-link :to="{name: 'CategoryPage'}">
            <div class="card-icon">
                <div class="card-icon-body">
                    <div class="card-icon-i">
                        <i class="fa fa-codiepie"></i>
                    </div>
                    <h4>Category</h4>
                </div>
            </div>
        </router-link>

        <router-link :to="{name: 'ProductPage'}">
            <div class="card-icon">
                <div class="card-icon-body">
                    <div class="card-icon-i">
                        <i class="fa fa-shopping-bag"></i>
                    </div>
                    <h4>Products</h4>

                </div>
            </div>
        </router-link>

        <router-link :to="{name: 'salesPage'}">
            <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa fa-file-text" ></i>
                </div>
                <h4>Recent sales</h4>

            </div>
        </div>
        </router-link>

        <router-link :to="{name: 'bannerpage'}">
            <div class="card-icon">
                <div class="card-icon-body">
                    <div class="card-icon-i">
                        <i class="fa fa-user-plus" ></i>
                    </div>
                    <h4>Admin Edit Banner</h4>

                </div>
            </div>
        </router-link>
       
        <div class="table">
            <div class="table-head">
                <h3>Prolific Sellers</h3>
            </div>
            <div class="table-body">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Item sold</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    John Wayne
                                </td>
                                <td>
                                    Ps5 consoles
                                </td>
                                <td>
                                    $1560
                                </td>
                                <td>
                                    Calgary, Ab
                                </td>
                                <td>
                                   <div class="btn-group">
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                   </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Curtis Shaw
                                </td>
                                <td>
                                    Xbox consoles 
                                </td>
                                <td>
                                    $1200
                                </td>
                                <td>
                                    Toronto, ON 
                                </td>
                                <td>
                                   <div class="btn-group">
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                   </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    William Kene 
                                </td>
                                <td>
                                    Wooden desk 
                                </td>
                                <td>
                                    $890 
                                </td>
                                <td>
                                    Hamilton, ON 
                                </td>
                                <td>
                                   <div class="btn-group">
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                   </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Emily Scone 
                                </td>
                                <td>
                                    Headsets & mouse 
                                </td>
                                <td>
                                    $700
                                </td>
                                <td>
                                    Winnipeg, MB
                                </td>
                                <td>
                                   <div class="btn-group">
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                   </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
export default{
    name: "adminPanel"
}

</script>

<style>
.dashboard{
    display: flex;
    flex-wrap: wrap;
}
.card-icon{
    flex: 1 1 18%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 30px;
}
.card-icon .card-icon-body{
    padding: 20px;
}
.card-icon-i{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color:#f4efe5;
    margin: 0 auto;
    position: relative;
}
.card-icon .card-icon-body h4{
    text-align: center;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
}
.card-icon-i i{
    top: 50%;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #5d98ae;
}
.table{
    flex: 0 1 58%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 30px;
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
}
.table .table-head{
    border-bottom: 1px solid #eee;
    padding: 0 15px;
}
.table .table-body{
    padding: 25px;
}
.table .table-body table{
    width: 100%;
    border-collapse: collapse;
}
.table table thead tr th{
    padding: 0 10px;
    height: 50px;
    vertical-align: middle;
    color: rgb(213, 105, 105);
    font-weight: 500;
    border-bottom-color: #e2e8f0;
    background-color: #f7f8f9;
   
}
.table tbody tr td, .table tbody tr th {
    padding: 10px;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
    font-size: 14px;
    color: #212529;
    text-align: center;
}
.btn-group{
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-group a{
    padding: 3px;
    width: 26px;
    height: 26px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin: 0 5px;
        color: #fff;
    background-color:#5dae8b;
    border-color: #5dae8b;
    border-radius: 0.375rem;
    font-weight: 500;
}
.btn-group a{
        text-align: center;
    line-height: 25px;
    display: block;
}
@media only screen and (max-width: 768px) {
    .table{
        flex: 1 1 100%;
        overflow-x: scroll;
    }
}
.cards{
    flex: 1 1 34%;
    flex-wrap: wrap;
}
.card{
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(101, 62, 120, 0.045);
    margin: 0 8px 10px;
    position: relative;
    background-color: #5CAD8A;
    height: 94px;
    padding: 20px;
}
.card .icon {
    color: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 38px;
    bottom: 69px;
    z-index: 1;
}
.card .icon i {
    font-size: 100px;
    line-height: 0;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
}


@media only screen and (max-width: 768px) {
    .cards{
        flex: 1 1 100%;
    }
    .card .icon {
        z-index: 0;
    }
    .card .num, .card h3 {
        z-index: 0;
    }
}
</style>