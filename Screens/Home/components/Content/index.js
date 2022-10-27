import { Text, View } from "react-native";
import { content } from "./css/style";

export default function Content() {
	return (
		<View style={content.viewprincipal}>
			<View style={content.viewlista}>
				<Text style={content.txthome}>LANCAMENTOS</Text>
			</View>
			<View style={content.banner}>
				
			</View>
				<View style={content.viewprodutos}>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
					<View style={content.produtos}>
						<View style={content.imageprod}></View>
						<Text style={content.txtprod}>Produto1</Text>
					</View>
				</View>
		</View>
	)
}