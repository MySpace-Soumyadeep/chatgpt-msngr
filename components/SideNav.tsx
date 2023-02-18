import NewChat from "./NewChat"

function SideNav() {
    return (
        <div className="p-2 flex flex-colh-screen">
            <div className="flex-1">
                <div>
                    {/* new chat */}
                    <NewChat />
                    <div>
                        {/* model selection */}
                    </div>

                    {/* map through the chatrow */}
                </div>
            </div>
        </div>
    )
}

export default SideNav