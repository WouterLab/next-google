import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
      <div className='flex space-x-6'>
        <HeaderOption Icon={SearchIcon} title='Все' selected />
        <HeaderOption Icon={PhotographIcon} title='Картинки' />
        <HeaderOption Icon={PlayIcon} title='Видео' />
        <HeaderOption Icon={NewspaperIcon} title='Новости' />
        <HeaderOption Icon={MapIcon} title='Карты' />
        <HeaderOption Icon={DotsVerticalIcon} title='Ещё' />
      </div>
      <div className='flex space-x-4'>
        <p className='link'>Настройки</p>
        <p className='link'>Инструменты</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
