# Food Recipes App

## Features

- Search by recipe names
- Filter by user types such as vegetarian
- Add to Favorite

## Folder Structure

- `/components` => reusable components တွေထားဖို့၊ feature အလိုက် folder တွေခွဲပြီးထားသင့်၊ project တစ်လျှောက် နေရာတော်တော်များများမှာ သုံးတဲ့ ဉပမာ button, spinner component တွေဆို `/components/ui` ဆိုတဲ့ folder အောက်မှာထားသင့်

- `/hooks` => custom hooks တွေထားဖို့၊ feature အလိုက် folder တွေခွဲပြီးထားလို့လည်းရ ဉပမာ add to favorite feature အတွက် custom hooks တွေအများကြီးသုံးရမယ်ဆို `/hooks/favorite` ဆိုတဲ့ folder ထဲမှာ သူနဲ့သက်ဆိုင်ရာ hooks တွေ တစုတဝေးတည်းထားသင့်

- `/utils` => utility functions တွေထားဖို့နဲ့ အခြား utility ပိုင်းနဲ့သက်ဆိုင်ရာတွေထားဖို့

- `/utils/constants` => constant values တွေသုံးချင်တဲ့အခါတွေမှာ ဒီအထဲမှာ သက်ဆိုင်ရာအလိုက် file တွေတည်ဆောက်ပြီး export လုပ်လို့ရ

- `/pages` => routes

- `/types` => typescript types

- `/redux` => redux related files တွေ folder တွေထားဖို့

- `/redux/features` => to put redux slices, eg if you want to add slice for users, create a folder and a file inside of it like `/redux/features/users/users.slice.ts`. You can also add selector functions inside of it like `/redux/features/users/users.selectors.ts`

- `/redux/hooks.ts` => To dispatch actions and select state from store, please use those hooks. Do not use library provided hooks - `useSelector` and `useDispatch`.

- `router.tsx` => routes တွေ configure လုပ်တာကို ဒီ file ထဲမှာရေးပါ။
