console.log ("it works");
var name = "Doug"

var campingProducts = [
	{
		"productName": "Revolt 3.0",
		"companyName": "Black Diamond",
		"productDescription": "A revolutionary waterproof and USB-rechargeable headlamp that also runs on standard AAA batteries, the Revolt is a full-featured, hybrid-power headlamp that doles out a whopping 300 lumens of light.",
		"MSPR": "$89.00",
		"URL": "http://blackdiamondequipment.com/en_CA/headlamps-and-lanterns/storm-BD620633_cfg.html#start=1",
		"prodImage": "http://demandware.edgesuite.net/sits_pod49/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw5c305ba5/products/lighting/S17/620633_OCTN_Storm_Headlamp_QuadPower_web.jpg?sw=472"
	},
	{
		"productName": "Stingray",
		"companyName": "Tentsile",
		"productDescription": "The lightweight, portable treehouse would use three anchor points to create a \"living space\" suspended between the trees ...and so began the process of designing and prototyping affordable, habitable, tensioned tree structures. The Stingray has a removable rain fly for unbeatable views, which can be pegged out to the ground, creating a large 160ft²/ 15m² of covered porch area. The rain fly flaps can be rolled and toggled out of the way above the front door, or folded under the tent and hooked to the central hatch creating a second windbreak and a thermal buffer.The Stingray Tree Tent can also become a multi-story camping base for six by setting up a Trillium underneath the tent.The Stingray Tree Tent can also become a multi-story camping base for six by setting up a Trillium underneath the tent.",
		"MSPR": "$289.00 ",
		"URL": "https://www.tentsile.com/collections/treetents/products/connect-tree-tent",
		"prodImage": "https://cdn.shopify.com/s/files/1/0213/4326/products/Connect_Online_Fly_Rainforest_1024x1024.jpg?v=1509016236"
	},
	{
		"productName": "Large Orange Waterbottle Purifier 2.0 - 0 PPM Filter",
		"companyName": "Grayl ",
		"productDescription": "Purify water. Anywhere. At 10.9 oz (309 g), the Ultralight is perfect for trekking the globe, outdoor adventures and emergency kits.",
		"MSPR": "$15.99",
		"URL": "https://www.thegrayl.com/buy/grayl-ultralight-purifier-bottle",
		"prodImage": "https://static1.squarespace.com/static/52a101f6e4b0ddb9096493f1/5743684c746fb9854e895da1/57e16e7f20099e1414d56c2a/1474391681696/321755_UL-purifier_orange_CART_750px.jpg?format=750w"
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
			<p>We hope you love these products. If you don’t please let us know how we can help. We’d love to hear more from you!</p>
				<p>Cheers, <br>
				The Team at Hubba </p>
			</td>
		</tr>
	</table>	
`)

for (i = 0; i <= campingProducts.length; i++) {
	$('.two-column').append(`

		<!--[if (gte mso 9)|(IE)]>
						<table width="100%">
						<tr>
						td width="50%" valign="top">
						<![endif]-->
						
							<div class="column">
							<table width="100%">
								<tr>
									<td class="inner">

										<table class="contents">
											<tr>
												<td class="contentsImage">
													<img src="${campingProducts[i].prodImage}" width="280" alt="" />
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
						
							<div class="column">
							<table width="100%">
								<tr>
									<td class="inner">
							                
										<table class="contents">
											<tr>
												<td class="text contentsText">
													<span class="companyName">${campingProducts[i].companyName}</span> - <span class="productName">${campingProducts[i].productName}</span>
															<p class="productDescription">${campingProducts[i].productDescription}</p>
															<p><strong class="mrsp">MRSP: ${campingProducts[i].MSPR}</strong> <a class="button" href="${campingProducts[i].URL}" target="_blank">Order</a></p>
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
	`);
}