import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { setSelectedCategory } from "@/redux/features/recipes.slice"
  

const Dropdown = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (UserType: '001' | '002' )  => {
    dispatch(setSelectedCategory(UserType));
  }
  
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className=" border-none">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => {
            handleSelect('001')
          }}>အသားစား</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {
            handleSelect('002')
          }}>သတ်သတ်လွတ်</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Dropdown