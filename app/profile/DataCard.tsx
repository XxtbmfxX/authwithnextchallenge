export default function DataCard() {
  const data = [
    { type: "name", content: "Xanthe Neal" },
    {
      type: "bio",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis ea, eius, quo impedit rem velit animi accusamus nulla incidunt dolorem nam voluptatum molestiae ",
    },
    { type: "phone", content: "4343456" },
    { type: "email", content: "something@gmail.com" },
  ];
  return (
    <div className="md:border-2  md:border-gray-300 rounded-lg  p-4 w-3/4  max-w-3xl ">
      <ul>
        <li className=" border-b-2 p-2 flex items-center ">
          <span className="w-3/6 text-gray-400 text-xs ">PHOTO</span>
          <img
            className="w-16 h-16 rounded-lg "
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="user"
          />
        </li>
        {data.map((i, index) => (
          <li className=" border-b-2 p-2 flex h-20  items-center " key={index}>
            <span className="w-3/6 text-gray-400 uppercase text-xs ">
              {i.type}
            </span>
            <span className="text-sm w-1/2 whitespace-nowrap  overflow-hidden text-ellipsis  ">
              {i.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
