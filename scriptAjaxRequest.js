console.log ("it works");
var name = "Doug"

var campingProducts = [
	{
		"URL": "http://blackdiamondequipment.com/en_CA/headlamps-and-lanterns/storm-BD620633_cfg.html#start=1",
		"prodImage": "http://demandware.edgesuite.net/sits_pod49/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw5c305ba5/products/lighting/S17/620633_OCTN_Storm_Headlamp_QuadPower_web.jpg"
	},
	{
		"URL": "https://www.tentsile.com/collections/treetents/products/connect-tree-tent",
		"prodImage": "https://cdn.shopify.com/s/files/1/0213/4326/products/Connect_Online_Fly_Rainforest_1024x1024.jpg"
	},
	{
		"URL": "https://www.thegrayl.com/buy/grayl-ultralight-purifier-bottle",
		"prodImage": "https://static1.squarespace.com/static/52a101f6e4b0ddb9096493f1/5743684c746fb9854e895da1/57e16e7f20099e1414d56c2a/1474391681696/321755_UL-purifier_orange_CART_750px.jpg"
   }
]

$('.welcome').append (`
	<table width="100%">
		<tr>
			<td class="inner contents">
			<p>Hi ${name} </p>
			<p>We think you’re going to love these new incredible brands from Hubba. Check them out here.</p>
			</td>
		</tr>
	</table>	
`)


$('.cheers').append (`
	<table width="100%">
		<tr>
			<td class="inner contents">
			<p>Thanks very much for checking out the best of Hubba’s camping products. Make sure to click to find out more about the product.</p>
				<p>Cheers, <br>
				The Team at Hubba </p>
			</td>
		</tr>
	</table>	
`)

$.ajax({
	type: "GET",  
	url: "product.csv",
	dataType: "text",       
	success: function(response)  
	{
		data = $.csv.toObjects(response);
		

		for (i = 0; i <= data.length; i++) {
			$('.two-column-wrapper').append(`
				<tr class="two-column-row">
				<td class="two-column">
				
				<!--[if (gte mso 9)|(IE)]>
								<table width="100%">
								<tr>
								<td width="50%" valign="top">
								<![endif]-->
								
									<div class="column columnLeft">
									<table width="100%">
										<tr>
											<td class="inner">

												<table class="contents">
													<tr>
														<td class="contentsImage">
															<img src="${data[i].prodImage}" width="280" alt="" />
														</td>
													</tr>
												</table>

											</td>
										</tr>
									</table>
									</div>

								<!--[if (gte mso 9)|(IE)]>
								</td><td width="50%" valign="top">
								<![endif]-->
								
									<div class="column columnRight">
									<table width="100%">
										<tr>
											<td class="inner">
									                
												<table class="contents">
													<tr>
														<td class="text contentsText">
															<span class="companyProduct">${data[i].companyName} - ${data[i].productName}</span>
																	<p class="productDescription">${data[i].productDescription}</p>
																	
																		
																		<div>
																		<span class="mrsp">MRSP: ${data[i].MSPR}</span><!--[if mso]>
																		  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style="height:25px;v-text-anchor:middle;width:80px;" arcsize="100%" strokecolor="#91a4b5" fillcolor="#fff">
																		    <w:anchorlock/>
																		    <center style="color:#3b4c56;font-family:sans-serif;font-size:13px;font-weight:bold;">Order</center>
																		  </v:roundrect>
																		<![endif]--><a href="http://www.hubba.com" target="_blank"
																		style="background-color:#fff;border:1px solid #91a4b5;border-radius:25px;color:#3b4c56;display:inline-block;font-family:sans-serif;font-size:11px;line-height:25px;text-align:center;text-decoration:none;width:80px;height:25px;-webkit-text-size-adjust:none;mso-hide:all;">Order</a></div>
																	

																	
														</td>
													</tr>
												</table>

											</td>
										</tr>
									</table>
									</div>

								<!--[if (gte mso 9)|(IE)]>
								</td>
								</tr>
								</table>
								<![endif]-->
					</td>
				</tr>
			`);
		}

	}
});