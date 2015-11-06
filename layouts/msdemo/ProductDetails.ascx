﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ProductDetails.ascx.cs" Inherits="ms8.layouts.msdemo.ProductDetails" %>
<%@ Import Namespace="Sitecore.Data.Items" %>
<%@ Import Namespace="Sitecore.Links" %>


<div class="content-page">

    <a href="/en/journals.aspx">< Back to search</a>
    <h1 style="padding-top: 20px;">
        <sc:Text runat="server" Field="title" />
    </h1>
    <div style="float:left;padding-right: 20px;padding-bottom:20px;">
        <sc:Image runat="server" Field="Enriched Image" MaxWidth="150" style=""/>
    </div>
    <div style="">
        <h2>
            <sc:Text runat="server" Field="Subject Group" /> - Publisher: <sc:Text runat="server" Field="Publisher Description" />
        </h2>
        <h3>
            Date of publication: <sc:Date runat="server" Format="MM/dd/YYYY" Field="Publication Date"/>.<br />ISBN: <sc:Text runat="server" Field="ISBN" />
        </h3>
        <h4>
            Edition:  <sc:Text runat="server" Field="Edition" /> - Pages:  <sc:Text runat="server" Field="Pages" /> - Format:  <sc:Text runat="server" Field="Print format" />
        </h4>
                <script type="text/javascript">
            $(document).ready(function() {
                $.getJSON("http://informa.services/api/pricing/getPrices?isbn=" + <%= Isbn %>, function (data) {
                    var div = $('h3');
                    div.append(". <span>Cost: " + data.Currency + Number(data.Value).toFixed(2)+"</span>");
                });
            });
            </script>
            <p>
                <sc:Text runat="server" Field="description" />
            </p>
            <hr />
            <p>
                <sc:Text runat="server" Field="Table of content" />
            </p>
    </div>


</div>
