import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
	if (isLoading) {
		return <Loading />;
	}
	if (errMess) {
		return <h4>{errMess}</h4>;
	}
	return (
		<Card>
			<CardImg src={baseUrl + item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);
}

function Home(props) {
	return (
		<FadeTransform
			in
			transformProps={{
				exitTransform: "scale(0.5) translateY(50%)",
			}}
		>
			<Card>
				<CardImg src={baseUrl + item.image} alt={item.name} />
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		</FadeTransform>
	);
}

export default Home;
