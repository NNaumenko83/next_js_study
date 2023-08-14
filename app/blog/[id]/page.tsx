import { Metadata } from "next";
import React from "react";

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
	return { title: id };
}

const Post = ({ params: { id } }: Props) => {
	return <div>Post page {id}</div>;
};

export default Post;
