﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ProductDetails.ascx.cs" Inherits="ms8.layouts.msdemo.ProductDetails" %>

<div class="container" style="min-height: 500px;">
    <h1>
        <sc:Text runat="server" Field="title" />
    </h1>
    <h2>
        <sc:Text runat="server" Field="Subject Group" /> - Publisher: <sc:Text runat="server" Field="Publisher Description" />
        
    </h2>
    <h3>
        Date of publication: <sc:Date runat="server" Format="MM/dd/YYYY" Field="Publication Date"/>
    </h3>
    <p>
        <sc:Text runat="server" Field="description" />
    </p>
    <hr />
    <p>
        <sc:Text runat="server" Field="Table of content" />
    </p>
</div>