import { Button } from "@/components/ui/button";

function ErrorPage() {
	return (
		<div className="h-[600px] w-full flex flex-col items-center bg-[#0f1010] text-white pt-24">
			<div id="text" className="text-4xl">
				Error! Something went wrong.
			</div>
			<div id="buttons" className=" w-[600px] flex justify-center pt-16">
				<Button
					variant={"outline"}
					className="bg-transparent px-16 py-6 text-xl desktop:text-base"
					onClick={() => {
						location.reload();
					}}
				>
					Refresh
				</Button>
			</div>
		</div>
	);
}

export default ErrorPage;
