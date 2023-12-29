import OptionButtons from "./buttons";
import DeleteMemberBtn from "./deleteMemberBtn";
import { PostsI } from "./notificationfeed";
import UnsubscribeButton from "./unsubscribeButton";

const NotificationCard: React.FC<PostsI> = ({ date, name, type, id, isViewer, isParticipant }: PostsI) => {
	return (
		<div className="col-span-2">
			<div className={ ((isViewer || isParticipant) ? "bg-green-100" : "bg-gray-100") + " p-4 rounded-md" }>
				<h3 className="text-lg font-semibold mb-2">{ name }</h3>
				<p className="text-gray-600">Музыкальный инструмент: { type }</p>
				<p className="text-gray-600">Дата: {date}</p>
				{
					isViewer 
						? <div className="flex items-center">
							<h1 className="text-green-400">Вы смотрите это соревнование</h1>
							<UnsubscribeButton id={id} />
						</div>
						: isParticipant
							? <div className="flex items-center">
								<h1 className="text-green-500">Вы участвуете в этом соревновании</h1>
								<DeleteMemberBtn id={id} />
							</div>
							: <OptionButtons id={ id } />
				}
			</div>
		</div>
	);
};
  
export default NotificationCard;