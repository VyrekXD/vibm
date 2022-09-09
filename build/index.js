import boxen from 'boxen';
import chalk from 'chalk';
import update from 'log-update';
import { join } from 'path';
import { DEBUG, commons } from './constants.js';
import { getTemplates } from './lib/getTemplates.js';
import { handleCreation } from './lib/handleCreation.js';
import { handleReplacing } from './lib/handleReplacing.js';
import { handleResponse } from './lib/handleResponse.js';
const { __dirname  } = commons();
const botsPath = join(__dirname, '../../../Bots');
async function main() {
    const startBox = boxen('Vyrek Interface Bot Maker', {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(startBox);
    console.log(`Getting ${chalk.red('templates')}...`);
    await getTemplates();
    DEBUG ? console.log(`Got ${chalk.red('templates')}`) : update(`Got ${chalk.red('templates')}`);
    const responses = await handleResponse();
    const directory = join(botsPath, responses.name);
    await handleCreation(responses, directory);
    await handleReplacing(responses, directory);
}
main();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm94ZW4gZnJvbSAnYm94ZW4nXHJcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcclxuaW1wb3J0IHVwZGF0ZSBmcm9tICdsb2ctdXBkYXRlJ1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcclxuXHJcbmltcG9ydCB7IERFQlVHLCBjb21tb25zIH0gZnJvbSAnLi9jb25zdGFudHMuanMnXHJcbmltcG9ydCB7IGdldFRlbXBsYXRlcyB9IGZyb20gJy4vbGliL2dldFRlbXBsYXRlcy5qcydcclxuaW1wb3J0IHsgaGFuZGxlQ3JlYXRpb24gfSBmcm9tICcuL2xpYi9oYW5kbGVDcmVhdGlvbi5qcydcclxuaW1wb3J0IHsgaGFuZGxlUmVwbGFjaW5nIH0gZnJvbSAnLi9saWIvaGFuZGxlUmVwbGFjaW5nLmpzJ1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gJy4vbGliL2hhbmRsZVJlc3BvbnNlLmpzJ1xyXG5cclxuY29uc3QgeyBfX2Rpcm5hbWUgfSA9IGNvbW1vbnMoKVxyXG5jb25zdCBib3RzUGF0aCA9IGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vLi4vQm90cycpXHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IHN0YXJ0Qm94ID0gYm94ZW4oJ1Z5cmVrIEludGVyZmFjZSBCb3QgTWFrZXInLCB7XHJcblx0XHRwYWRkaW5nOiAxLFxyXG5cdFx0bWFyZ2luOiAxLFxyXG5cdFx0Ym9yZGVyU3R5bGU6ICdkb3VibGUnXHJcblx0fSlcclxuXHRjb25zb2xlLmxvZyhzdGFydEJveClcclxuXHJcblx0Y29uc29sZS5sb2coYEdldHRpbmcgJHtjaGFsay5yZWQoJ3RlbXBsYXRlcycpfS4uLmApXHJcblx0YXdhaXQgZ2V0VGVtcGxhdGVzKClcclxuXHRERUJVR1xyXG5cdFx0PyBjb25zb2xlLmxvZyhgR290ICR7Y2hhbGsucmVkKCd0ZW1wbGF0ZXMnKX1gKVxyXG5cdFx0OiB1cGRhdGUoYEdvdCAke2NoYWxrLnJlZCgndGVtcGxhdGVzJyl9YClcclxuXHJcblx0Y29uc3QgcmVzcG9uc2VzID0gYXdhaXQgaGFuZGxlUmVzcG9uc2UoKVxyXG5cdGNvbnN0IGRpcmVjdG9yeSA9IGpvaW4oYm90c1BhdGgsIHJlc3BvbnNlcy5uYW1lKVxyXG5cdGF3YWl0IGhhbmRsZUNyZWF0aW9uKHJlc3BvbnNlcywgZGlyZWN0b3J5KVxyXG5cdGF3YWl0IGhhbmRsZVJlcGxhY2luZyhyZXNwb25zZXMsIGRpcmVjdG9yeSlcclxufVxyXG5cclxubWFpbigpXHJcbiJdLCJuYW1lcyI6WyJib3hlbiIsImNoYWxrIiwidXBkYXRlIiwiam9pbiIsIkRFQlVHIiwiY29tbW9ucyIsImdldFRlbXBsYXRlcyIsImhhbmRsZUNyZWF0aW9uIiwiaGFuZGxlUmVwbGFjaW5nIiwiaGFuZGxlUmVzcG9uc2UiLCJfX2Rpcm5hbWUiLCJib3RzUGF0aCIsIm1haW4iLCJzdGFydEJveCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJTdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJyZXNwb25zZXMiLCJkaXJlY3RvcnkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQ3pCLE9BQU9DLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBT0MsTUFBTSxNQUFNLFlBQVksQ0FBQTtBQUMvQixTQUFTQyxJQUFJLFFBQVEsTUFBTSxDQUFBO0FBRTNCLFNBQVNDLEtBQUssRUFBRUMsT0FBTyxRQUFRLGdCQUFnQixDQUFBO0FBQy9DLFNBQVNDLFlBQVksUUFBUSx1QkFBdUIsQ0FBQTtBQUNwRCxTQUFTQyxjQUFjLFFBQVEseUJBQXlCLENBQUE7QUFDeEQsU0FBU0MsZUFBZSxRQUFRLDBCQUEwQixDQUFBO0FBQzFELFNBQVNDLGNBQWMsUUFBUSx5QkFBeUIsQ0FBQTtBQUV4RCxNQUFNLEVBQUVDLFNBQVMsQ0FBQSxFQUFFLEdBQUdMLE9BQU8sRUFBRTtBQUMvQixNQUFNTSxRQUFRLEdBQUdSLElBQUksQ0FBQ08sU0FBUyxFQUFFLGVBQWUsQ0FBQztBQUVqRCxlQUFlRSxJQUFJLEdBQUc7SUFDckIsTUFBTUMsUUFBUSxHQUFHYixLQUFLLENBQUMsMkJBQTJCLEVBQUU7UUFDbkRjLE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLE1BQU0sRUFBRSxDQUFDO1FBQ1RDLFdBQVcsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQztJQUVyQkksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUVqQixLQUFLLENBQUNrQixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsTUFBTWIsWUFBWSxFQUFFO0lBQ3BCRixLQUFLLEdBQ0ZhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFakIsS0FBSyxDQUFDa0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUM1Q2pCLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRUQsS0FBSyxDQUFDa0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQyxNQUFNQyxTQUFTLEdBQUcsTUFBTVgsY0FBYyxFQUFFO0lBQ3hDLE1BQU1ZLFNBQVMsR0FBR2xCLElBQUksQ0FBQ1EsUUFBUSxFQUFFUyxTQUFTLENBQUNFLElBQUksQ0FBQztJQUNoRCxNQUFNZixjQUFjLENBQUNhLFNBQVMsRUFBRUMsU0FBUyxDQUFDO0lBQzFDLE1BQU1iLGVBQWUsQ0FBQ1ksU0FBUyxFQUFFQyxTQUFTLENBQUM7Q0FDM0M7QUFFRFQsSUFBSSxFQUFFIn0=