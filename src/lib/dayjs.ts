import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import localizedFormart from "dayjs/plugin/localizedFormat";

dayjs.locale("pt-br");
dayjs.extend(localizedFormart);

export { dayjs };
