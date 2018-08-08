<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            Title
            <mu-menu slot="right">
                <mu-button flat>MENU</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 1</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 2</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>
        <mu-icon value="home"></mu-icon>

        <mu-icon size="36" value="home"></mu-icon>
        <mu-icon size="36" value="flight_takeoff" color="red"></mu-icon>
        <mu-icon size="36" value="cloud_download" color="orange"></mu-icon>
        <mu-icon size="36" value="info" color="blue"></mu-icon>
        <mu-alert color="success">
            <mu-icon left value="check_circle"></mu-icon> this is success alert
        </mu-alert>
        <mu-container style="width:100%;">
            <mu-bottom-nav :value.sync="shift" shift>
                <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
        <mu-container>
            <mu-bottom-nav>
                <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
        <mu-container>
            <mu-flex justify-content="center">
                <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>
            </mu-flex>
            <mu-bottom-sheet :open.sync="open">
                <mu-list @item-click="closeBottomSheet">
                    <mu-sub-header>Select One</mu-sub-header>
                    <mu-list-item button>
                        <mu-list-item-action>
                            <mu-icon value="grade" color="orange"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>Star</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-action>
                            <mu-icon value="inbox" color="blue"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>Inbox</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-action>
                            <mu-icon value="chat" color="green"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>Chat</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-action>
                            <mu-icon value="email" color="cyan"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>Email</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-bottom-sheet>
        </mu-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>